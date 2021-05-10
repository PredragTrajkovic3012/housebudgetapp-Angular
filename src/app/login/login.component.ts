import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;


  loginForm: FormGroup =this.fb.group({

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  loginuser()
  {
    if (this.loginForm.valid){
      const data = {
        ...this.loginForm.value,
        id_tenant: "00000000-1111-2222-3333-000000000001"
      }
      this.http.post("/api/users/login", data).subscribe(r =>{
        console.log(r);
        // this.router.navigate(["/about"]);
        this.router.navigateByUrl("/transaction")
      }, error => {

      })

    }else{
      console.log(this.loginForm.value);
    }


  }


}
