import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Login } from '../interfaces/login.interface';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor (private http: HttpClient){

  }


  login(data: Login){
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, data).pipe(
      catchError((errorResp) => this.handleError(errorResp)),
      tap((res: User) =>{        
        //localStorage.setItem('user', JSON.stringify(res));
        this.handleUserSubject(res);				
      })
    );
  }


  private handleUserSubject(data:User)
  {    
		const user = new User(
			data.id,
			data.email,
			data.first_name,
			data.last_name,
			data.groups,
			data.access,
      data.refresh
		);

    localStorage.setItem('rols', data.roles!.toString())

    localStorage.setItem('token', data.access!);
		delete data.access;
    localStorage.setItem('refresh', data.refresh!);
    delete data.refresh;
      
  }

  private handleError(errorResp: HttpErrorResponse)
  {
    if (errorResp.error) {
			if (errorResp.error.messages) {
				if (Array.isArray(errorResp.error.messages)) {
					const msg = errorResp.error.messages;
					let errM = ''
					msg.forEach((element:any)  => {
						errM = errM + element.property + ': ' + element.errors[0] + '\n'
					});
					return throwError(errM);
				}
				else
					return throwError(errorResp.error.messages.toString())
			}
			if (errorResp.error.error) {
				return throwError(errorResp.error.error.toString())
			}
		}
		let errorMessage = 'Error de conexión';
		if (!errorResp.error || !errorResp.error.non_field_errors) {
			return throwError(errorMessage);
		}
    //delete localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');

		errorMessage = '';
		for (const key in errorResp.error) {
			if (errorResp.error.hasOwnProperty(key)) {
				errorMessage += errorResp.error[key] + '\n';
			}
		}
		return throwError(errorMessage);
  }

  public getUserId(id:any){
    return this.http.get(`${environment.apiUrl}/users/${id}/`).pipe(
      catchError((errorResp) => this.handleError(errorResp)),
      tap((res: any) =>{        
        localStorage.setItem('user', JSON.stringify(res));
      })
    );  
  }



  public logout(){
    localStorage.clear()
  }


  


  


} 

