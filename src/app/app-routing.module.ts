import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSerialNoComponent } from './Components/add-serial-no/add-serial-no.component';
import { AllFeaturesComponent } from './Components/all-features/all-features.component';
import { CellRendererComponent } from './Components/cell-renderer/cell-renderer.component';
import { CopyToClipboardComponent } from './Components/copy-to-clipboard/copy-to-clipboard.component';
import { CustomFilterComponent } from './Components/custom-filter/custom-filter.component';
import { HomeComponent } from './Components/home/home.component';
import { MultiHeaderComponent } from './Components/multi-header/multi-header.component';
import { SortingAndPaginationComponent } from './Components/sorting-and-pagination/sorting-and-pagination.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "allfeatures", component: AllFeaturesComponent },
  { path: "addserialno", component: AddSerialNoComponent },
  { path: "sortingandpagination", component: SortingAndPaginationComponent },
  { path: "cellrenderer", component: CellRendererComponent },
  { path: "mutipleheader", component: MultiHeaderComponent },
  { path: "customfilter", component: CustomFilterComponent },
  { path: "copytoclipboard", component: CopyToClipboardComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
