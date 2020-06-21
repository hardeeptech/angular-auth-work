  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';
import { TopbarPageComponent } from './topbar-page/topbar-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddareaComponent } from './area/addarea/addarea.component';
import { EditareaComponent } from './area/editarea/editarea.component';
import { ListareaComponent } from './area/listarea/listarea.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    SidebarPageComponent,
    TopbarPageComponent,
    FooterPageComponent,
    DashboardPageComponent,
    TablePageComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AddareaComponent,
    EditareaComponent,
    ListareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
