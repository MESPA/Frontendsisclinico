import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitasModel } from '../Models/Citas';
import { DoctoresModel } from '../Models/doctores.model';
import { PacientesModel } from '../Models/pacientes.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RegistrosgeneralesService {
 

  regpacientes = new PacientesModel;
  regcitas= new CitasModel;
  regdoct = new DoctoresModel;
  private url = "http://localhost:5000/";
  private regp = "api/RegistrosPacientes";
  private regc = "api/RegistrarCitas";
  private regdoc = "api/RegistrosDoctores"

  constructor(private http: HttpClient , private auth:AuthService) { 
  }

  fheader(){
 }

  registrarpacientes(regpacientes: PacientesModel){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-type' , 'application/json');
    httpHeaders.append( 'Autorization' , 'Bearer' + localStorage.getItem("Token")); 
 

    const regpacData = {
      ...regpacientes
    };
    return this.http.post(`${this.url + this.regp}`,regpacData ,{headers : httpHeaders}
    );

  }
  registrarcitas(regcitas : CitasModel){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-type' , 'application/json');
    httpHeaders.append( 'Autorization' , 'Bearer' + localStorage.getItem("Token")); 
 

    this.fheader();
    const regcitasData={
      ...regcitas
    };
    return this.http.post(`${this.url + this.regc}`,regcitasData ,{headers : httpHeaders} 
    );

  }
  regstrardoctores(regdoct : DoctoresModel){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-type' , 'application/json');
    httpHeaders.append( 'Autorization' , 'Bearer' + localStorage.getItem("Token")); 
    
    const regdocData={
      ...this.regdoct
    }
    return this.http.post(`${this.url + this.regdoc}`,regdocData //,{headers : httpHeaders} 
    );

  }


}
