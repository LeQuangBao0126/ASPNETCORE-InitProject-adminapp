import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { RolesDetailComponent } from './roles/roles-detail/roles-detail.component';
import { NotificationService } from './../../shared/services/notification.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from './../../shared/modules/validation-message/validation-message.module';
@NgModule({
  declarations: [
    FunctionsComponent,
    UsersComponent,
    RolesComponent,
    PermissionsComponent,
    RolesDetailComponent
  ],
  imports: [
    CommonModule , SystemRoutingModule ,ButtonModule,PanelModule,TableModule
    ,PaginatorModule ,BlockUIModule,ProgressSpinnerModule
    ,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ValidationMessageModule
  ],
  providers:[
    BsModalService,
    NotificationService
  ]
})
export class SystemsModule { }
