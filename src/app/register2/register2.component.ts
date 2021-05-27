import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  hide = true;
  username = new FormControl('', [Validators.required]);

  registerForm: FormGroup = this.fb.group({

    firstname: this.fb.control('', [Validators.required]),
    lastname: this.fb.control('', [Validators.required]),
    username: this.fb.control('', [Validators.required]),
    monthly_income: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),



  });

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onRegister(){
    if (this.registerForm.valid){
      const data = {
        ...this.registerForm.value,
        id_tenant: "00000000-1111-2222-3333-000000000001"
      }
      this.http.post("/api/users/register", data).subscribe(r =>{
        console.log(r);
      });

    }else{
      console.log(this.registerForm.value);
    }
  }

}
