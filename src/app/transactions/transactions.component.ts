import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../login/auth.service';
import {ExpansesComponent} from '../expanses/expanses.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddincomeComponent} from '../addincome/addincome.component';
import {MessageComponent} from '../message/message.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit
{
  detailflag = false;
  currentBalanceForU = '0';
  transactions = [];
  spentOn = [];


  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};
    this.http.get('/api/transactions', _header).subscribe(r => {
      console.log(r);
    });
    this.getTotalBalanceforUser();
    this.loadHistory();
    this.loadSpentOn();
  }
  doSomething(){
    console.log('alo');
  }

  // tslint:disable-next-line:typedef
  onExpensesOpen(){
    this.dialog.open(ExpansesComponent, {
      data: {ttype: 'outcome'}
    } as MatDialogConfig).afterClosed().subscribe(r => {
      console.log(r);
    });
  }

  onAddIncomeOpen(){
    this.dialog.open(AddincomeComponent, {
      data: {exampl: 'pera income'}
    } as MatDialogConfig).afterClosed().subscribe(r => {
      console.log(r);
    });
  }
  showDetails(){
    this.detailflag = !this.detailflag;
  }

  getTotalBalanceforUser()
  {

      const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};

      this.http.get('/api/transactionsbalance', _header).subscribe((r: any) => {
        console.log(r.current_balance);
        this.currentBalanceForU = r.current_balance;
       // this._snackBar.openFromComponent(MessageComponent, {duration: 3000, panelClass: ['white-snackbar']});
      }, error => {console.log('greska prilikom ucitavanja balansa'); });

  }
  loadHistory()
  {
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};

    this.http.get('/api/transactions', _header).subscribe((r: any) => {
      console.log(r.current_balance);
      this.transactions = r;

      // this._snackBar.openFromComponent(MessageComponent, {duration: 3000, panelClass: ['white-snackbar']});
    }, error => {console.log('greska prilikom ucitavanja istorije transakcija'); });

  }

  // tslint:disable-next-line:typedef
  loadSpentOn()
  {
    // tslint:disable-next-line:variable-name
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};

    this.http.get('/api/transactiontypeamount', _header).subscribe((r: any) => {
      console.log(r);
      this.spentOn = r;

      // this._snackBar.openFromComponent(MessageComponent, {duration: 3000, panelClass: ['white-snackbar']});
    }, error => {console.log('greska prilikom ucitavanja spentOn'); });


  }




}
