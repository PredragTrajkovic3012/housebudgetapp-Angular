import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "./user.model";

import {Subject} from "rxjs";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




@Injectable({providedIn:'root'})
export class LoginComponent implements OnInit {
  hide = true;
  isLoading = false;
  error: string = "";
  user=new Subject<User>()
  token: string="";





  loginForm: FormGroup = this.fb.group({

    username: this.fb.control("", [Validators.required]),
    password: this.fb.control("", [Validators.required]),

  });
  username = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth:AuthService
  ) {
  }

  ngOnInit(): void {
    const tokenInStorage = localStorage.getItem('token');
    if (tokenInStorage){
      this.router.navigateByUrl('/transactions');
    }
  }

  loginuser() {
    if (this.loginForm.valid) {
      const data = {
        ...this.loginForm.value,
        id_tenant: "00000000-1111-2222-3333-000000000001"
      }
      this.isLoading = true;
      this.http.post("/api/users/login", data).subscribe((r:any) => {
        console.log(r);
        this.auth.setToken(r.id_session)





        this.isLoading = false;
        this.router.navigateByUrl("/transactions")
      }, error => {
        console.log(error);
        this.error = 'An error occured!';
        this.isLoading = false;

      })

    } else {
      console.log(this.loginForm.value);
    }


  }


}

