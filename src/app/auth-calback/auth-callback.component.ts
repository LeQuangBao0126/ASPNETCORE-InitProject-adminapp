import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { readBuilderProgram } from 'typescript';
import { AuthService } from '../shared/services';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }
  error: boolean;
  async ngOnInit() {
    if (this.route.snapshot.queryParams.error) {
      this.error = true;
      return;
    }
    await this.authService.completeAuthentication();
    this.router.navigate(['/'])
  }

}
