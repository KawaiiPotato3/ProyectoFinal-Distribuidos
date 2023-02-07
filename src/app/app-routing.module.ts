import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./users/user.module').then((m) => m.UserModule),
      },
      {
        path: 'dash',
        loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'log',
        loadChildren: () =>
        import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
      }


      
    ],
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
