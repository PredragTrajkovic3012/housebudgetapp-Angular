import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Routes} from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  hide = true;
  username = new FormControl('', [Validators.required]);
  registerForm: FormGroup =this.fb.group({

    firstname: this.fb.control("",[Validators.required]),
    lastname: this.fb.control("",[Validators.required]),
    username: this.fb.control("",[Validators.required]),
    monthly_income: this.fb.control("",[Validators.required]),
    password: this.fb.control("",[Validators.required]),



  })
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }



  constructor(
    private fb:FormBuilder,
    private http:HttpClient
  ) {


  }
  onRegister(){
    if (this.registerForm.valid){
      const data = {
        ...this.registerForm.value,
        id_tenant: "00000000-1111-2222-3333-000000000001"
      }
      this.http.post("/api/users/register", data).subscribe(r =>{
        console.log(r);
      })

    }else{
      console.log(this.registerForm.value);
    }
  }

  ngOnInit(): void {
  }


}
