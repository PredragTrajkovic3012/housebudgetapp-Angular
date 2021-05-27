import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {User} from "../login/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  hide = true;
  username = new FormControl('', [Validators.required]);
  isLoading = false;
  error: string = "";
  user=new Subject<User>()
  token: string = "";


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void
  {
    const tokenInStorage = localStorage.getItem('token');
    if (tokenInStorage){
      this.router.navigateByUrl('/transactions');
    }
  }

  loginForm: FormGroup = this.fb.group({

    username: this.fb.control("", [Validators.required]),
    password: this.fb.control("", [Validators.required]),

  });

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  loginuser() {
    if (this.loginForm.valid) {
      const data = {
        ...this.loginForm.value,
        id_tenant: "00000000-1111-2222-3333-000000000001"
      }
      this.isLoading = true;
      this.http.post('/api/users/login', data).subscribe((r:any) => {
        console.log(r);
        this.auth.setToken(r.id_session);
        this.isLoading = false;
        this.router.navigateByUrl('/transactions');
      }, error => {
        console.log(error);
        this.error = 'An error occured!';
        this.isLoading = false;

      });

    } else {
      console.log(this.loginForm.value);
    }


  }

}
