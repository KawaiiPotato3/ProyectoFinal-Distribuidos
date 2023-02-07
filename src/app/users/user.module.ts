import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SalonComponent } from './salon/salon.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';

@NgModule({
  declarations: [SalonComponent, UsuarioComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    FeatherModule
  ]
})
export class UserModule { }
