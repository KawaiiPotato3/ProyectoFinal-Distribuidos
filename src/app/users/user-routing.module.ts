import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarsalonComponent } from './editarsalon/editarsalon.component';
import { SalonComponent } from './salon/salon.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {
    path: 'salon',
    component: SalonComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'editarsalon',
    component: EditarsalonComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
