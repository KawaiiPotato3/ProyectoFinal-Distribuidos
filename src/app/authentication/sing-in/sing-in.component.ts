import { Component, Inject } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  constructor(
    public dialogRef: MatDialogRef<SingInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {
    this.initForm();
  }

  public view!: boolean;
  public formRegistro!: FormGroup;

  initForm(){
    this.formRegistro = this.fb.group({
      nombre: ['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      apellidos: ['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      fec_nacimiento: ['',[Validators.required,this.validarEdad]],
      telefono: ['',[Validators.required,Validators.pattern("^\\d{9}$")]],
      sexo: ['',Validators.required],
      email: ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      password2: ['',Validators.required],
      
    },
    {validators:this.validarContras}
    // ,
    )
  }

  
  validarEdad(control: AbstractControl) {
    const hoy = new Date();
    const date = new Date(control.value);
    const edad = hoy.getFullYear() - date.getFullYear();

    return edad<15? {menor15 : true}: null
    
  }

  validarContras(form: FormGroup) {
    const contra = form.get('password')?.value;
    const confirmarContra = form.get('password2')?.value;
    return contra === confirmarContra ? null : { notSame: true };
  }






  crear_usuario(){


    let datos = {
      email: this.formRegistro.controls['email'].value,
      nombre: this.formRegistro.controls['nombre'].value,
      apellidos: this.formRegistro.controls['apellidos'].value,
      fec_nacimiento: this.formRegistro.controls['fec_nacimiento'].value,
      password: this.formRegistro.controls['password'].value,
      /* sexo: this.formRegistro.controls['sexo'].value, */
      sexo: 'm',
      telefono: this.formRegistro.controls['telefono'].value,
    }


    this.service.create_user(datos).subscribe((data:any)=>{

      console.log('usuario_creado')
      console.log(datos)
      this.router.navigate(['/dash/main']);

    }, err => {
      console.log(err)
      
    })

   
  }



  
  
       
}



