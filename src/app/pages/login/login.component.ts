import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
 
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
usuario: UsuarioModel = new UsuarioModel();
recordar: false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

    if ( localStorage.getItem('email')) {
      
      this.usuario.email = localStorage.getItem('email');
      //this.recordar = true;

    }
  }
  onSubmit(form: NgForm){

    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text:'Espere por favor...'
    });

    Swal.showLoading();

     this.auth.login(this.usuario)
     .subscribe(resp => {
       console.log(resp);
       Swal.close();

       if (this.recordar) {
         localStorage.setItem('email',this.usuario.email);
       }

       this.router.navigateByUrl('/home')
     },(errores)=>{

      console.log(errores.statusText);

      Swal.fire({

        icon: 'error',
        title:'Error al autenticar',
        text:errores.statusText
      });

     } );
   }

}
