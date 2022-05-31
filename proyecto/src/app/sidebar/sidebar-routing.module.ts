import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent } from '../dashboard/dashboard.component';
import { PartesTrabajoComponent } from '../partes-trabajo/partes-trabajo.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent } ,

  { path: 'partes-trabajo', component: PartesTrabajoComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SidebarRoutingModule { }
