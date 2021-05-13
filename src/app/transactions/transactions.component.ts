import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    const _header = {headers: new HttpHeaders({Authorization: this.auth.token})};
    this.http.get('/api/transactions', _header).subscribe(r => {
      console.log(r);
    });
  }

}
