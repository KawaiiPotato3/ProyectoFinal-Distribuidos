import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-hall',
  templateUrl: './sing-hall.component.html',
  styleUrls: ['./sing-hall.component.css']
})

export class SingHallComponent {

    public formSalon!: FormGroup;
    enviado = false;
    habilitado ?: boolean;
  
  constructor( private fb: FormBuilder ) {
    
  }

  ngOnInit(): void {
    this.formSalon = this.fb.group({
      nombreusuario:["",Validators.required],
      dni:["",[Validators.required,Validators.pattern('^[0-9]{8}$')]],
      nombrelocal:["",Validators.required],
      serviciosadicionales:["",Validators.required],
      descripcion:["",Validators.required],
      adjuntarfotos: [],
      capacidadmaxima:["",Validators.required],
      preciopordia:['',Validators.required],
      region:['',Validators.required],
      provincia:['',Validators.required],
      distrito:['',Validators.required],
      direccionactual:['',Validators.required],
      celular:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
      correoelectronico:['',[Validators.required,Validators.email]],
      telefono:['',[Validators.pattern('^[0-9]{9}$')]],
      otraformacontacto:[],
    });
    

  }

  get f() {
    return this.formSalon.controls;
  
  }

  ConfirmarSalon(){

    Swal.fire({
      title: '¿Estas seguro de guardar?',
      icon: 'warning',
      iconColor: '#fda201',
      showCancelButton: true,
      confirmButtonColor: '#218737',
      cancelButtonColor: '#a41d2b',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!'
    }).then((result) => {
      if ( this.formSalon.valid) {
        Swal.fire(
          'GUARDADO',
          'EXITOSO',
          'success'
        )
      }
      else{
        Swal.fire(
          'GUARDADO',
          'fallido',
          'error'
        )
      }
    })
  }

  enviarfotos(){
    let fotos : FormData = new FormData()

    
  }

  /* formarray ducumentacion */


}
