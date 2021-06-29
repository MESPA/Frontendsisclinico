import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrosgeneralesComponent } from './pages/registrosgenerales/registrosgenerales.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthGuard } from './guard/auth.guard';
import { RegistrospacientesComponent } from './pages/registrospacientes/registrospacientes.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent 
  //, canActivate :[AuthGuard] 
 },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrosgenerales', component: RegistrosgeneralesComponent },
  { path: 'registrospacientes', component: RegistrospacientesComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
