import { Component, OnInit } from '@angular/core';
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.component.html',
  styleUrls: ['./navigation2.component.scss']
})
export class Navigation2Component implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
