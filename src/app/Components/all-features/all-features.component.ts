import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AgGridEvent, ColDef, GridApi, GridReadyEvent, GridSizeChangedEvent, PaginationNumberFormatterParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { CustomFilter } from 'src/app/Common/Components/custom-filter.component';
import { FakeDataService } from 'src/app/Services/fake-data.service';

const headerComponentParams = {
  template:
    '<div class="ag-cell-label-container" role="presentation">' +
    '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
    '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
    '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
    '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
    '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
    '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
    '    ** <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
    '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
    '  </div>' +
    '</div>'
}

@Component({
  selector: 'app-all-features',
  templateUrl: './all-features.component.html',
  styleUrls: ['./all-features.component.scss']
})
export class AllFeaturesComponent implements OnInit {
  private gridapi!: GridApi;
  private paginationNumberFormatter: (params: PaginationNumberFormatterParams) => string = (params: PaginationNumberFormatterParams) => {
    return '[' + params.value.toLocaleString() + ']';
  }
  private apiSubscription: Subscription = new Subscription;
  tooltipShowDelay = 500;
  paginationPageSize = 5;

  columnDef: ColDef[] = [
    { sortable: false, headerComponent: CustomFilter, valueGetter: "node.rowIndex + 1", minWidth: 60, maxWidth: 100 },
    { filter: "agTextColumnFilter", headerName: "User Id", field: "userId", wrapText: true },
    { filter: "agTextColumnFilter", headerName: "Id", field: "id", wrapText: true },
    { filter: "agTextColumnFilter", headerName: "Title", field: "title", wrapText: true },
    { filter: "agTextColumnFilter", headerName: "Completed", field: "completed", wrapText: true, cellStyle: { 'text-align': 'center' } }
  ];

  defaultColDef = {
    sortable: true,  //Enable sorting
    unSortIcon: true,  //Visible unsort icon
    resizable: true,
    wrapText: true,
    autoHeight: true,
    headerComponentParams: headerComponentParams,

    //For filter option
    flex: 1,
    floatingFilter: false,
    suppressMenu: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
  }

  constructor(private fakeDataSvc:FakeDataService) {

  }

  ngOnInit(): void {

  }

  onGridReady(params: GridReadyEvent) {
    this.gridapi = params.api;
    this.fakeDataSvc.GetList().subscribe(res=>{
      params.api.setRowData(res);
    });
  }

  onSortChanged(e: AgGridEvent) {
    e.api.refreshCells();
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {

  }

  onPageSizeChanaged() {
    const value = (document.getElementById("page-size") as HTMLInputElement).value;
    this.gridapi.paginationSetPageSize(Number(value));
  }


}
