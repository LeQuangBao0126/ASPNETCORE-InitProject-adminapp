import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FunctionsComponent } from './functions/functions.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { SystemRoutingModule } from './system-routing.modules';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {BlockUIModule} from 'primeng/blockui';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';
import { RolesDetailComponent } from './roles/roles-detail/roles-detail.component';
import { NotificationService } from './../../shared/services/notification.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from './../../shared/modules/validation-message/validation-message.module';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { RolesAssignComponent } from './users/role-assign/role-assign.component';
@NgModule({
  declarations: [
    FunctionsComponent,
    UsersComponent,
    RolesComponent,
    PermissionsComponent,
    RolesDetailComponent,
    UsersDetailComponent,
    RolesAssignComponent
  ],
  imports: [
    CommonModule , SystemRoutingModule ,ButtonModule,PanelModule,TableModule
    ,PaginatorModule ,BlockUIModule,ProgressSpinnerModule,KeyFilterModule,CalendarModule,
    InputTextModule,CheckboxModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    ModalModule.forRoot(),
  ],
  providers:[
    BsModalService,
    NotificationService,
    DatePipe
  ]
})
export class SystemsModule { }
