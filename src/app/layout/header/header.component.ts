import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LogInComponent } from 'src/app/authentication/log-in/log-in.component';
import { SingInComponent } from 'src/app/authentication/sing-in/sing-in.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(
    public dialog: MatDialog,
    private router: Router
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

  navigate(data:any){
    if (data==1){
      this.router.navigate(['/perfil/salon']);

    }
    else if(data==2){
      this.router.navigate(['/perfil/editarsalon']);

    }else if(data==3){
      this.router.navigate(['/perfil/usuario']);

    }else if(data==4){
      this.router.navigate(['/dash/main'])
    }else if(data==5){
      this.router.navigate(['/log/registrar_salon'])
    }

  }
}  

