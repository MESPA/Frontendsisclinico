import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import Swal from 'sweetalert2';
import { RegistrosgeneralesService } from 'src/app/services/registrosgenerales.service';
import { PacientesModel } from 'src/app/Models/pacientes.model';
import { CitasModel } from 'src/app/Models/Citas';



@Component({
  selector: 'app-registrosgenerales',
  templateUrl: './registrosgenerales.component.html',
  styleUrls: ['./registrosgenerales.component.css']
})
export class RegistrosgeneralesComponent implements OnInit {

  esdependiente: false;

  regpac : PacientesModel ;
 
    // documento: "",
    // nombres:"",
    // primerApellido:"",
    // segundoApellido:"",
    // sexo:"",
    // fechaDeNacimiento:"",
    // estadoCivil:"",
    // grupoSanguineo:"",
    // ars:"",
    // nss:"",
    // correoElectronico:"",
    // username:"",
    // telefono:"",
    // celular:"",
    // direccion:"",
    // dependiente: ""
  
    cit : CitasModel = new CitasModel();

  constructor(private http : RegistrosgeneralesService) { }

  ngOnInit() {
    this.regpac  = new PacientesModel();
    //this.esdependiente = true;
  }
  circulos(){

    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })}
    onSubmit(form : NgForm){

      if (form.invalid) {
        return;
       }

      console.log('Respuesta',form)

      this.http.registrarpacientes(this.regpac).subscribe(resp => {
        console.log('Respuesta',resp)
      });
    }
  
  circulo1(){

    }
    circulo2(){

      $('#exampleModal2').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      });}
  circulo3(){

        $('#exampleModal3').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget) // Button that triggered the modal
          var recipient = button.data('whatever') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          var modal = $(this)
          modal.find('.modal-title').text('New message to ' + recipient)
          modal.find('.modal-body input').val(recipient)
        });}
  circulo4(){

          $('#exampleModal4').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('New message to ' + recipient)
            modal.find('.modal-body input').val(recipient)
          });}
    

}
