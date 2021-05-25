import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'housebudgetapp';
  constructor(iconRegistry:MatIconRegistry,sanitizer:DomSanitizer) {
    iconRegistry.addSvgIcon(
      'myhome',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/home.svg'));
    iconRegistry.addSvgIcon(
      'wallet',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/wallet.svg'));
    iconRegistry.addSvgIcon(
      'category',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category.svg'));
    iconRegistry.addSvgIcon(
      'plus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/plus-circle.svg'));
    iconRegistry.addSvgIcon(
      'plus-green',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/plus-circle-green.svg'));
    iconRegistry.addSvgIcon(
      'groceries',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/groceries.svg'));
    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/check.svg'));
    iconRegistry.addSvgIcon(
      'square',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/square.svg'));


  }




}
