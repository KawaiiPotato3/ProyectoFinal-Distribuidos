import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingHallComponent } from './sing-hall/sing-hall.component';

import { FeatherModule } from 'angular-feather';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LogInComponent, SingInComponent, SingHallComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FeatherModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { 
      provide: MatDialogRef,
      useValue: []
    }, 
    { provide: MAT_DIALOG_DATA, useValue: {} },
       
  ],
  

})
export class AuthenticationModule { }
