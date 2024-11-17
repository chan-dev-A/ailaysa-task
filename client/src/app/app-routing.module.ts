import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BoxListComponent} from "./components/box-list/box-list.component";
import {BoxComponent} from "./components/box/box.component";

const routes: Routes = [
  {
    path:'',
    component:BoxListComponent,
  },
  {path:'box/:id',component:BoxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
