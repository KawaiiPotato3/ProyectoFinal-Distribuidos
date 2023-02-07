import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';

import { FeatherModule } from 'angular-feather';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
      AuthLayoutComponent, MainLayoutComponent,HeaderComponent,FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatherModule,
    MatDialogModule
  ]
})
export class LayoutModule { }
