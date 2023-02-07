import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  create_user(data:any){
    return this.http.post(`${environment.apiUrl}/register/generics/`, data);

  }

  getUserById(id : any){
    return this.http.get(`${environment.apiUrl}/list_user/${id}/`); 
  }
}
