import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models';
import { environment } from '../../../environments/environment';
import { UtilitiesService } from './utilities.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
    constructor(private http: HttpClient ,private utilitiesService :UtilitiesService) {
        super();
    }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/user`, this.httpOptions)
            .pipe(catchError(this.handleError));
    }
    getMenuByUserId(userId : string) : Observable<any[]>{
        return this.http.get<Function[]>(`${environment.apiUrl}/api/user/${userId}/menu`, this.httpOptions)
            .pipe(map(response => { 
               var functions = this.utilitiesService.UnflatteringForLeftMenu(response);   
               return functions; 
            })
            ,catchError(this.handleError))
    }
}