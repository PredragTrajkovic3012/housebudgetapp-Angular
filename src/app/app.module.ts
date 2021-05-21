import { NgModule } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./shared/material.module";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
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



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    TransactionsComponent,
    LoadingSpinnerComponent,
    ExpansesComponent,
    Navigation2Component,
    SpentonComponent,
    HomeComponent,




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
    FlexLayoutModule






  ],
  providers: [AuthService,RouterGuardGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
