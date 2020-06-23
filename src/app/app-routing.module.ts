import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { AddpracticeComponent } from './practice/addpractice/addpractice.component';
import { ListpracticeComponent } from './practice/listpractice/listpractice.component';
import { EditpracticeComponent } from './practice/editpractice/editpractice.component';
import { AddgroupComponent } from './group/addgroup/addgroup.component';
import { EditgroupComponent } from './group/editgroup/editgroup.component';
import { ListgroupComponent } from './group/listgroup/listgroup.component';


const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  {
    path: 'user', component: UserComponent, 
    children:[
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: 'layout', component: LayoutPageComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      { path: 'table', component: TablePageComponent, canActivate: [AuthGuard]},
      { path: 'practice/addpractice', component: AddpracticeComponent, canActivate: [AuthGuard]},
      { path: 'practice/editpractice/:id', component: EditpracticeComponent, canActivate: [AuthGuard]},
      { path: 'practice/listpractice', component: ListpracticeComponent, canActivate: [AuthGuard]},
      { path: 'group/addgroup', component: AddgroupComponent, canActivate: [AuthGuard]},
      { path: 'group/editgroup/:id', component: EditgroupComponent, canActivate: [AuthGuard]},
      { path: 'group/listgroup', component: ListgroupComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
