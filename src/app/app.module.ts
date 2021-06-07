import { NgModule } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./shared/material.module";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';

import { TransactionsComponent } from './transactions/transactions.component';
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {AuthService} from "./login/auth.service";
import {RouterGuardGuard} from "./router-guard.guard";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ExpansesComponent } from './expanses/expanses.component';
import { Navigation2Component } from './navigation2/navigation2.component';
import { SpentonComponent } from './spenton/spenton.component';
import { HomeComponent } from './home/home.component';

import { MessageComponent } from './message/message.component';
import { Register2Component } from './register2/register2.component';
import { Login2Component } from './login2/login2.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from "@angular/material/form-field";




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TransactionsComponent,
    LoadingSpinnerComponent,
    ExpansesComponent,
    Navigation2Component,
    SpentonComponent,
    HomeComponent,
    Register2Component,
    Login2Component,





  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        FlexLayoutModule,
        FormsModule,



    ],
  entryComponents:[MessageComponent],
  providers: [AuthService, RouterGuardGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
