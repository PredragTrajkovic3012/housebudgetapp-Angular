import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {RouterGuardGuard} from './router-guard.guard';
import {ExpansesComponent} from './expanses/expanses.component';
import {HomeComponent} from './home/home.component';
import {Register2Component} from "./register2/register2.component";
import {Login2Component} from "./login2/login2.component";

const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    canActivate:[RouterGuardGuard],
    children: [
      {path: '', redirectTo: 'transactions', pathMatch: 'full'},
      {
        path: 'transactions',
        component: TransactionsComponent
      },


    ]

  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register2', component: Register2Component},
  {path: 'login2', component: Login2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

