import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from "@angular/forms";


import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent{

  public formSubmitted = false;

  error : any
  constructor(
    
    public dialogRef: MatDialogRef<LogInComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
    

  ) { 
    
  }

  public formLogIn !: FormGroup

  public view!: boolean;

  ngOnInit(): void {
    this.formLogIn = this.fb.group({
      email: ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['',[Validators.required,this.validatePassword, Validators.minLength(8)]],
    });
  }

  emailValidator(control:AbstractControl) {
    if (control.value) {
      const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
      return matches ? null : { 'invalidEmail': true };
    } else {
      return null;
    }

  }

  

  login(){
    
    if(!this.formLogIn.valid){
      console.log("Error!");
    }

    this.service.login(this.formLogIn.value).subscribe((res: any) =>{
      this.service.getUserId(res.id).subscribe(data => {
        this.router.navigate(['/dash/main']);
      }, err => console.log(err))
      
    }, error => {
      //alert(error)
      this.error = error;
    })
  }


  validatePassword(control: FormControl) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(control.value) ? null : { invalidPassword: true };
  }

  }

  

