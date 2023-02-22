
import { DashboardMainComponent } from './dashboard-page/dashboard-main/dashboard-main.component';
import { SigninComponent } from './login_page/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './status-page/header-component/header-component.component';
import { CreateMainComponent } from './create/create-main/create-main.component';

const routes: Routes = [
  {path: "", component: SigninComponent },
  {path: "login", component:  SigninComponent},
  {path: "dashboard", component:  DashboardMainComponent},
  {path: "status/:projectID", component: HeaderComponent},
  {path: "create", component: CreateMainComponent},
  {path: "**", redirectTo:  ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
