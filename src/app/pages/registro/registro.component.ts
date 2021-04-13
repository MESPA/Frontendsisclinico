import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordar :false;

  constructor(private auth: AuthService, private router : Router) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();
   }
   onSubmit(form: NgForm){

    if (form.invalid) {
      return;
    }
//alertas sweetalert2
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text:'Espere por favor...'
    });
    Swal.showLoading();

     this.auth.Registrar(this.usuario).subscribe(resp => {

      console.log(resp);
      Swal.close();

      if (this.recordar) {
        localStorage.setItem('email',this.usuario.email);
      }

      this.router.navigateByUrl('/home')
     },(errores)=>{

      console.log(errores.error.errores.mensaje);
      Swal.fire({

        icon: 'error',
        title:'Error al autenticar',
        text:errores.error.errores.mensaje
      });
     } );
   }


}
