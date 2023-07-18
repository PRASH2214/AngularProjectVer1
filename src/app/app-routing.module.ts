import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginLayoutComponent } from './account/login-layout/login-layout.component';
import { LoginComponent } from './account/login/login.component';
import { MasterLayoutComponent } from './account/master-layout/master-layout.component';
import { HomeComponent } from './account/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
