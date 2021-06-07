import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  public params;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute

  ) { }

  changeQueryParams() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: this.params
    });
  }
}
