import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LogInComponent } from 'src/app/authentication/log-in/log-in.component';
import { SingInComponent } from 'src/app/authentication/sing-in/sing-in.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(
    public dialog: MatDialog
  ){

  }

  AbrirLoginModal(){
    const dialogRef = this.dialog.open(LogInComponent,{
      width: '1100px',
      height: '75%',
      data:"",
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('modal cerrado')
    })
  }

  OpenSingInModal(){

    const dialogRef = this.dialog.open(SingInComponent,{
      width: '600px',
      height: '900px',
      data: ''
    });

  }
}  

