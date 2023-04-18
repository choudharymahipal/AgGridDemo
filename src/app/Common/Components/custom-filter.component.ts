import { Component, ElementRef, ViewChild } from "@angular/core";
import { IHeaderAngularComp } from "ag-grid-angular";
import { IHeaderParams } from "ag-grid-community";
import { __param } from "tslib";

@Component({
    selector: 'app-custom-filter',
    template: `<div id="showhide" #filterButton class="pointer arrange" (click)="OnFilterClick()"> 
    <span class="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>
    Filter
    <span id="FilterUp" class="ag-icon ag-icon-small-up HideMe" unselectable="on" role="presentation"></span> 
    <span id="FilterDown" class="ag-icon ag-icon-small-down" unselectable="on" role="presentation"></span> 
    </div>`,
    styles: ['.pointer {cursor: pointer !important; } .arrange {display: flex;} .HideMe{display:none}'],
})

export class CustomFilter implements IHeaderAngularComp {
    isShowUp: boolean = false;
    globalPrams: any;
    @ViewChild('filterButton', { read: ElementRef }) public filterButton: any;

    constructor() {

    }

    ngOnInit(): void {

    }

    OnFilterClick() {
        this.isShowUp = !this.isShowUp;
        if (this.isShowUp) {
            this.filterButton.nativeElement.getElementByTagName("span")[1].classList.remove("HideMe");//Up
            this.filterButton.nativeElement.getElementByTagName("span")[2].classList.add("HideMe");//Down
        } else {
            this.filterButton.nativeElement.getElementByTagName("span")[1].classList.add("HideMe");//Up
            this.filterButton.nativeElement.getElementByTagName("span")[2].classList.remove("HideMe");//Down
        }

        //Update floating filter
        let currentColDef = this.globalPrams.column.getColDef();
        let refreshedColDef = this.globalPrams.column.getColDef();

        refreshedColDef.floatingFilter = !refreshedColDef.floatingFilter;

        this.globalPrams.column.setColDef(currentColDef, refreshedColDef);

        const columnDef = this.globalPrams.api.getColumnDefs();
        columnDef!.forEach((colDef: any) => {
            colDef.floatingFilter = refreshedColDef.floatingFilter;
            try {
                if (colDef.children) {
                    colDef.children!.forEach((m: any) => {
                        m.floatingFilter = refreshedColDef.floatingFilter;
                    })
                }
            } catch (error) {
                //nothing
            }
        });
        if (columnDef != undefined) {
            this.globalPrams = __param;
        }
    }

    agInit(_params: IHeaderParams): void {
        this.globalPrams = _params;
    }
    refresh(params: IHeaderParams): boolean {
        return true;
    }
}