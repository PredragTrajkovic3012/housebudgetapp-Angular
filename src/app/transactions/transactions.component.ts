import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../login/auth.service';
import {ExpansesComponent} from '../expanses/expanses.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import {MessageComponent} from '../message/message.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit
{
  detailflag = false;
  data;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  selectedMonth = 0;
  currentTime = new Date();
  curyear = this.currentTime.getFullYear();
  monthflag = this.currentTime.getMonth();




  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getData();

    });

  }
  getData(){
    const _options: any = {};
    _options['headers'] = new HttpHeaders({Authorization: this.auth.token});
    _options['params'] = {month: this.monthflag, year:this.curyear};
    this.http.get('/api/transactions', _options).subscribe((r: any) => {
      this.data = r.res;
      console.log(r);
    });

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

  // tslint:disable-next-line:typedef
  onAddIncomeOpen(){
    this.dialog.open(ExpansesComponent, {
      data: {ttype: 'income'}
    } as MatDialogConfig).afterClosed().subscribe(r => {
      console.log(r);
    });
  }
  showDetails(){
    this.detailflag = !this.detailflag;
  }

  changeDate(subtract)
  {

    if (subtract){
      if (this.monthflag === 11){
        this.monthflag = 0;
        this.curyear++;

      }else{
        this.monthflag++;
      }


    }else {
      if (this.monthflag === 0){
        this.monthflag = 11;
        this.curyear--;

      }else{
        this.monthflag--;
      }

    }
    this.getData();
  }
  // tslint:disable-next-line:typedef
  getDataforDate(){

    const _data = {
      month: this.monthflag,
      year: this.curyear,
    };
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};
    this.http.get('/api/transactions',  _header).subscribe((r: any) => {
      this.data = r.res;
      console.log(r);
    });

  }

}
