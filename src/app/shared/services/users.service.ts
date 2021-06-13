import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { Pagination, User } from '../models';
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
    add(entity: User) {
        return this.http.post(`${environment.apiUrl}/api/user`, JSON.stringify(entity), this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    update(id: string, entity: User) {
        return this.http.put(`${environment.apiUrl}/api/user/${id}`, JSON.stringify(entity), this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    getDetail(id) {
        return this.http.get<User>(`${environment.apiUrl}/api/user/${id}`, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    getAllPaging(filter, pageIndex, pageSize) {
        return this.http.get<Pagination<User>>(`${environment.apiUrl}/api/user/filter?page=${pageIndex}&pageSize=${pageSize}&filter=${filter}`, this.httpOptions)
            .pipe(map((response: Pagination<User>) => {
                return response;
            }), catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(environment.apiUrl + '/api/user/' + id, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    getMenuByUserId(userId: string) {
        return this.http.get<Function[]>(`${environment.apiUrl}/api/user/${userId}/menu`, this.httpOptions)
            .pipe(map(response => {
                const functions = this.utilitiesService.UnflatteringForLeftMenu(response);
                return functions;
            }), catchError(this.handleError));
    }

    getUserRoles(userId: string) {
        return this.http.get<string[]>(`${environment.apiUrl}/api/user/${userId}/roles`, this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    removeRolesFromUser(id, roleNames: string[]) {
        let rolesQuery = '';
        for (const roleName of roleNames) {
            rolesQuery += 'roleNames' + '=' + roleName + '&';
        }
        return this.http.delete(environment.apiUrl + '/api/user/' + id + '/roles?' + rolesQuery, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    assignRolesToUser(userId: string, assignRolesToUser: any) {
        return this.http.post(`${environment.apiUrl}/api/user/${userId}/roles`,
            JSON.stringify(assignRolesToUser), this.httpOptions)
            .pipe(catchError(this.handleError));
    }
}