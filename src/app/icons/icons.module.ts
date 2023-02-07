import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';



@NgModule({
  declarations: [
    FeatherIconsComponent
  ],
  imports: [
    CommonModule, 
    FeatherModule.pick(allIcons)

  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
