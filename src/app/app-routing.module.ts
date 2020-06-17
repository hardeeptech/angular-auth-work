import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablePageComponent } from './table-page/table-page.component';


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
      { path: 'table', component: TablePageComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
