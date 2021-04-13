import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../Models/usuario.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:9095/api/Usuario";

  userToken:string; 

  constructor(private http: HttpClient) {
    this.leertoken();

   }
   logout(){

    localStorage.removeItem('Token');

   }

   login(Usuario:UsuarioModel){
    const authData = {
      ...Usuario
    };
    return this.http.post(
      `${this.url}/login`,authData
    ).pipe(map(resp =>{
      console.log('E')
      this.guardartoken(resp['token']);

      return resp;
    })
    );

   }

   Registrar(Usuario:UsuarioModel){

      const authData = {
        ...Usuario,Token:true
      };
      return this.http.post(
        `${this.url}/registrar`,authData
      ).pipe(map(resp =>{
        console.log('E')
        this.guardartoken(resp['token']);

        return resp;
      })
      );

   }

   private guardartoken(token :string){

    this.userToken = token;
    localStorage.setItem('Token',token);
   }

   leertoken(){
     if ( localStorage.getItem('Token')) {
       this.userToken= localStorage.getItem('Token');
     } else {
       this.userToken = '';
     }
     return this.userToken;
   }

   //guardar rutas para que no accedan
   isAutH(): boolean {

    return this.userToken.length> 2;
   }
}
