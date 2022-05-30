import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';
import { PartesTrabajoComponent } from './partes-trabajo/partes-trabajo.component';
import { ModalRellenarParteComponent } from './modal-rellenar-parte/modal-rellenar-parte.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent } ,

  { path: 'partes-trabajo', component: PartesTrabajoComponent } ,

  { path: '', component: DashboardComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
