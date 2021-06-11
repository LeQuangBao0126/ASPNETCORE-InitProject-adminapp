import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyNewCommentsComponent } from './monthly-new-comments/monthly-new-comments.component';
import { MonthlyNewKbsComponent } from './monthly-new-kbs/monthly-new-kbs.component';
import { MonthlyNewMemberComponent } from './monthly-new-member/monthly-new-member.component';
 
 

const routes: Routes = [
    {
        path: '',
        component: MonthlyNewKbsComponent
    },
    {
        path: 'monthly-new-kbs',
        component: MonthlyNewKbsComponent
    },
    {
        path: 'monthly-new-members',
        component: MonthlyNewMemberComponent
    },
    {
        path: 'monthly-new-comments',
        component: MonthlyNewCommentsComponent
    },
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRoutingModule {}
