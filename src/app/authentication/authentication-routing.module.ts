import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingHallComponent } from './sing-hall/sing-hall.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'registrarse',
    component: SingInComponent,
  },
  { 
    path: 'inicio_sesion',
    component: LogInComponent,
  },
  { 
    path: 'registrar_salon',
    component: SingHallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
