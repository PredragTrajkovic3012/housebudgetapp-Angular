import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../login/auth.service';
import {MessageComponent} from '../message/message.component';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.scss']
})
export class AddincomeComponent implements OnInit {
  incomeForm: FormGroup = this.fb.group({

    amount: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),

  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddincomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  // tslint:disable-next-line:typedef
  onClose(){
    this.dialogRef.close('pera se zatvorio u sebe');
  }
  // tslint:disable-next-line:typedef
  addIncome()
  {
    if (this.incomeForm.valid){
      const data = {
        ...this.incomeForm.value,
        ttype: 'income'
      };
      // @ts-ignore

      // tslint:disable-next-line:variable-name
      const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};

      this.http.post('/api/transactions', data, _header).subscribe(r => {
        console.log(r);
        this._snackBar.openFromComponent(MessageComponent, {duration: 3000, panelClass: ['white-snackbar']});
      });

    }else{
      console.log(this.incomeForm.value);
    }

  }

}
