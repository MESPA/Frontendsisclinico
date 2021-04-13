import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PacientesModel } from '../Models/pacientes.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RegistrosgeneralesService {
 

  regpacientes = new PacientesModel;
  private url = "http://localhost:9095/api/RegistrosPacientes";

 

 
  constructor(private http: HttpClient , private auth:AuthService) { 

  
  }

  registrarpacientes(regpacientes: PacientesModel){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-type' , 'application/json');
    httpHeaders.append( 'Autorization' , 'Bearer' + localStorage.getItem("Token")); 

    const regpacData = {
      ...regpacientes
    };
    return this.http.post(`${this.url}`,regpacData,{headers : httpHeaders} );

  }
}
