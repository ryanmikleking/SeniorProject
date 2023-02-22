import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatIconModule} from '@angular/material/icon'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatPaginatorModule} from '@angular/material/paginator'
import{MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './status-page/header-component/header-component.component';
import { StatusComponent } from './status-page/status-component/status-component.component';
import { BackgroundComponent } from './status-page/background/background.component';
import { SigninComponent } from './login_page/signin/signin.component';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { ImageDocumentationComponent } from './status-page/image-documentation/image-documentation.component';
import { ProjectInfoComponent } from './status-page/project-info-component/Project-Info.components';
import { DashboardMainComponent } from './dashboard-page/dashboard-main/dashboard-main.component';
import { TableComponent } from './dashboard-page/table/table.component';
import { CreateProjectComponent } from './create/create-project/create-project.component';
import { CreateMainComponent } from './create/create-main/create-main.component';
import { FormComponent } from './create/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    SigninComponent,
    ProjectInfoComponent,
    ImageDocumentationComponent,
    HeaderComponent,
    StatusComponent,
    BackgroundComponent,
    DashboardComponent,
    DashboardMainComponent,
    TableComponent,
    CreateProjectComponent,
    CreateMainComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    AmplifyAuthenticatorModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
