import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageComponent} from '../message/message.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-expanses',
  templateUrl: './expanses.component.html',
  styleUrls: ['./expanses.component.scss']
})
export class ExpansesComponent implements OnInit {
  durationInSeconds = 5;
  selectedTransactionType = 'No transaction type';
  categories = [];
  expansesForm: FormGroup = this.fb.group({

    amount: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),
    //category: this.fb.control('', [Validators.required]),
    transaction_type:this.fb.control('',[Validators.required])




  });

  constructor(
    // tslint:disable-next-line:variable-name
    private fb: FormBuilder,
    private http: HttpClient,

    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ExpansesComponent>,
    private auth: AuthService,


    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data);
    this.getAllCategories();

  }
  // tslint:disable-next-line:typedef
  onClose(){
    this.dialogRef.close('pera se zatvorio u sebe');
  }
  // tslint:disable-next-line:typedef
  addExpanses()
  {
    if (this.expansesForm.valid){
      const data = {
        ...this.expansesForm.value,
        ttype: this.data.ttype,

      };
      // @ts-ignore

      // tslint:disable-next-line:variable-name
      const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};

      this.http.post('/api/transactions', data, _header).subscribe(r => {
        console.log(r);
        console.log(data);
        this._snackBar.openFromComponent(MessageComponent, {duration: 3000, verticalPosition: 'top', panelClass: ['white-snackbar']});
      });

    }else{
      console.log(this.expansesForm.value);
    }

  }

  // tslint:disable-next-line:typedef
  getAllCategories()
  {

    // tslint:disable-next-line:variable-name
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};

    this.http.get('/api/transactiontypeall', _header).subscribe((r: any) => {
      this.categories = r;
      console.log(r);
      // this.currentBalanceForU=r.current_balance;
      // this._snackBar.openFromComponent(MessageComponent, {duration: 3000, panelClass: ['white-snackbar']});
    });

  }



}
