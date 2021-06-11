import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyNewMemberComponent } from './monthly-new-member/monthly-new-member.component';
import { MonthlyNewKbsComponent } from './monthly-new-kbs/monthly-new-kbs.component';
import { MonthlyNewCommentsComponent } from './monthly-new-comments/monthly-new-comments.component';
import { StatisticsRoutingModule } from './statistics-routing.module';



@NgModule({
  declarations: [
    MonthlyNewMemberComponent,
    MonthlyNewKbsComponent,
    MonthlyNewCommentsComponent
  ],
  imports: [
    CommonModule ,StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
