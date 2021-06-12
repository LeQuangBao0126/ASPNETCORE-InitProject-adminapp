import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            {path:'content', loadChildren: () => import('./contents/contents.module').then((m) => m.ContentsModule)},
            {path:'system', loadChildren: () => import('./systems/systems.module').then((m) => m.SystemsModule)},
            {path:'statistic', loadChildren: () => import('./statistics/statistics.module').then((m) => m.StatisticsModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
