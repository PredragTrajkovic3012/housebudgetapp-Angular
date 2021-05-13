import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {RouterGuardGuard} from "./router-guard.guard";

const routes: Routes = [
  {
    path:'transactions',
    component:TransactionsComponent,
    // canActivate:[RouterGuardGuard]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent]
