import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/shared/navbar/navbar/navbar.component';
import { RegistrosgeneralesComponent } from './pages/registrosgenerales/registrosgenerales.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegistrosgeneralesComponent,
    ReportesComponent,
    ConsultasComponent,
    FacturacionComponent,
    UsuariosComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
