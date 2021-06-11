import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from './../.././../shared/services/users.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users$: Observable<any[]>;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.users$  = this.userService.getAll() 
  }
}
