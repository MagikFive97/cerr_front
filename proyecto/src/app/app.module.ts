import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartesTrabajoComponent } from './partes-trabajo/partes-trabajo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/interaction' // a plugin!
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { DataTablesModule } from "angular-datatables";
import { TableComponent } from './table/table.component';
import { HttpClientModule} from '@angular/common/http';
import { ModalRellenarParteComponent } from './modal-rellenar-parte/modal-rellenar-parte.component';
import {BotonComponent} from './boton/boton.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ModalCrearParteComponent } from './modal-crear-parte/modal-crear-parte.component';
import { DashboardGerenciaComponent } from './dashboard-gerencia/dashboard-gerencia.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule } from '@angular/forms';
import { TableClienteComponent } from './table-cliente/table-cliente.component';
import { BotonClienteComponent } from './boton-cliente/boton-cliente.component';
import { ModalCrearClienteComponent } from './modal-crear-cliente/modal-crear-cliente.component';
import { ClienteSearchComponent } from './cliente-search/cliente-search.component';

import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { TableTrabajadoresComponent } from './table-trabajadores/table-trabajadores.component';
import { BotonTrabajadorComponent } from './boton-trabajador/boton-trabajador.component';
import { ModalCrearTrabajadorComponent } from './modal-crear-trabajador/modal-crear-trabajador.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    PartesTrabajoComponent,
    CalendarComponent,
    TableComponent,
    ModalRellenarParteComponent,
    BotonComponent,
    LoginComponent,
    ModalCrearParteComponent,
    DashboardGerenciaComponent,
    ClientesComponent,
    TableClienteComponent,
    BotonClienteComponent,
    ModalCrearClienteComponent,
    ClienteSearchComponent,
    TrabajadoresComponent,
    TableTrabajadoresComponent,
    BotonTrabajadorComponent,
    ModalCrearTrabajadorComponent,
    RegisterComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    MatCardModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
