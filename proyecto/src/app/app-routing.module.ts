import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';
import { PartesTrabajoComponent } from './partes-trabajo/partes-trabajo.component';
import { DashboardGerenciaComponent } from './dashboard-gerencia/dashboard-gerencia.component';
import {ClientesComponent} from './clientes/clientes.component';
import {TrabajadoresComponent} from './trabajadores/trabajadores.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'trabajador/dashboard', component: DashboardComponent } ,

  { path: 'trabajador/partestrabajo', component: PartesTrabajoComponent } ,

  { path: 'gerencia/dashboard', component: DashboardGerenciaComponent } ,

  { path: 'gerencia/clientes', component: ClientesComponent } ,

  { path: 'gerencia/trabajadores', component: TrabajadoresComponent } ,

  { path: '', component: LoginComponent } ,

  { path: 'login', component: LoginComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
