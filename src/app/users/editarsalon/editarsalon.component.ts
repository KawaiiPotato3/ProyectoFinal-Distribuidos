import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-editarsalon',
  templateUrl: './editarsalon.component.html',
  styleUrls: ['./editarsalon.component.css']
})
export class EditarsalonComponent {
  

    public formSalon!: FormGroup;
    enviado = false;
    habilitado ?: boolean;
  
  constructor( private fb: FormBuilder ) {
    
  }

  ngOnInit(): void {
    this.formSalon = this.fb.group({
      nombrelocal:["",Validators.required],
      serviciosadicionales:["",Validators.required],
      descripcion:["",Validators.required],
      adjuntarfotos: [],
      capacidadmaxima:["",Validators.required],
      preciopordia:['',Validators.required],
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
          'warning'
        )
        
      }
    })
  }

  enviarfotos(){
    let fotos : FormData = new FormData()

    
  }

}
