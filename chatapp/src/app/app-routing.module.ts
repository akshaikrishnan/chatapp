import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './login/loginform/loginform.component';
import { SignupformComponent } from './login/signupform/signupform.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  { path: 'login', component: LoginformComponent },
  { path: 'signup', component: SignupformComponent },
  { path: '', component: HomeComponent,canActivate:[AuthenticationGuard] },
  { path: 'user', component: LoginComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
