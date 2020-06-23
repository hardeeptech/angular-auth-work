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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { AddpracticeComponent } from './practice/addpractice/addpractice.component';
import { EditpracticeComponent } from './practice/editpractice/editpractice.component';
import { ListpracticeComponent } from './practice/listpractice/listpractice.component';
import { AddgroupComponent } from './group/addgroup/addgroup.component';
import { ListgroupComponent } from './group/listgroup/listgroup.component';
import { EditgroupComponent } from './group/editgroup/editgroup.component';

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
    AddpracticeComponent,
    EditpracticeComponent,
    ListpracticeComponent,
    AddgroupComponent,
    ListgroupComponent,
    EditgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
