import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { Pagination, User } from '../models';
import { environment } from '../../../environments/environment';
import { UtilitiesService } from './utilities.service';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

@Injectable({ providedIn: 'root' })
export class RoleService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    }
    add(entity: Role) {
        return this.http.post(`${environment.apiUrl}/api/roles`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    update(id: string, entity: Role) {
        return this.http.put(`${environment.apiUrl}/api/roles/${id}`, JSON.stringify(entity), { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getDetail(id) {
        return this.http.get<Role>(`${environment.apiUrl}/api/roles/${id}`, { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getAllPaging(filter, pageIndex, pageSize) {
        return this.http.get<Pagination<Role>>(`${environment.apiUrl}/api/roles/filter?page=${pageIndex}&pageSize=${pageSize}&filter=${filter}`, { headers: this._sharedHeaders })
            .pipe(map((response: Pagination<Role>) => {
                return response;
            }), catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(environment.apiUrl + '/api/roles/' + id, { headers: this._sharedHeaders })
            .pipe(
                catchError(this.handleError)
            );
    }
    getAll() {
        return this.http.get<Role[]>(`${environment.apiUrl}/api/roles`, { headers: this._sharedHeaders })
            .pipe(map((response: Role[]) => {
                return response;
            }), catchError(this.handleError));
    }
}