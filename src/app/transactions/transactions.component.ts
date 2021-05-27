import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../login/auth.service';
import {ExpansesComponent} from "../expanses/expanses.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddincomeComponent} from "../addincome/addincome.component";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit
{
  detailflag:boolean=false;


  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};
    this.http.get('/api/transactions', _header).subscribe(r => {
      console.log(r);
    });
  }
  doSomething(){
    console.log('alo');
  }

  // tslint:disable-next-line:typedef
  onExpensesOpen(){
    this.dialog.open(ExpansesComponent, <MatDialogConfig>{
      data: {exampl:"pera"}
    }).afterClosed().subscribe(r=>{
      console.log(r);
    });
  }

  onAddIncomeOpen(){
    this.dialog.open(AddincomeComponent, <MatDialogConfig>{
      data: {exampl:"pera income"}
    }).afterClosed().subscribe(r=>{
      console.log(r);
    });
  }
  showDetails(){
    this.detailflag=!this.detailflag;
  }

}
