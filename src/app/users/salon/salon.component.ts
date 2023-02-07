import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent {

  toggle=true
  public upvote(){
    this.toggle=false
  }

  ConfirmarSalon(){
    Swal.fire({
      title: '¿Estas seguro de guardar?',
      icon: 'warning',
      iconColor: '#fda201',
      showCancelButton: true,
      confirmButtonColor: '#218737',
      cancelButtonColor: '#a41d2b',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'GUARDADO',
          'EXITOSO',
          'success'
        )
      }
    })
  }

}
