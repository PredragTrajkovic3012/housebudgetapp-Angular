import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'housebudgetapp';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
    iconRegistry.addSvgIcon(
      'nullH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/broken_image.svg'));


    //Ikonice za app(zelene)
    iconRegistry.addSvgIcon(
      'bills',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/bills.svg'));
    iconRegistry.addSvgIcon(
      'car',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/car.svg'));
    iconRegistry.addSvgIcon(
      'clothes',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/clothes.svg'));
    iconRegistry.addSvgIcon(
      'communication',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/communication.svg'));
    iconRegistry.addSvgIcon(
      'eatout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/eatout.svg'));
    iconRegistry.addSvgIcon(
      'entertainment',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/entertainment.svg'));
    iconRegistry.addSvgIcon(
      'gift',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/gift.svg'));
    iconRegistry.addSvgIcon(
      'health',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/health.svg'));
    iconRegistry.addSvgIcon(
      'pet',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/pet.svg'));
    iconRegistry.addSvgIcon(
      'salary',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/salary.svg'));
    iconRegistry.addSvgIcon(
      'taxi',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/taxi.svg'));
    iconRegistry.addSvgIcon(
      'toiletries',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/toiletries.svg'));
    iconRegistry.addSvgIcon(
      'transport',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/transport.svg'));
    iconRegistry.addSvgIcon(
      'equipment',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/category_icons/equipment.svg'));
    iconRegistry.addSvgIcon(
      'equipment2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/equipment.svg'));

    //
 //ikonice history
    iconRegistry.addSvgIcon(
      'billsH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/bills.svg'));
    iconRegistry.addSvgIcon(
      'carH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/car.svg'));
    iconRegistry.addSvgIcon(
      'clothesH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/clothes.svg'));
    iconRegistry.addSvgIcon(
      'communicationH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/communication.svg'));
    iconRegistry.addSvgIcon(
      'eatoutH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/eatout.svg'));
    iconRegistry.addSvgIcon(
      'entertainmentH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/entertainment.svg'));
    iconRegistry.addSvgIcon(
      'giftH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/gift.svg'));
    iconRegistry.addSvgIcon(
      'healthH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/health.svg'));
    iconRegistry.addSvgIcon(
      'petH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/pet.svg'));
    iconRegistry.addSvgIcon(
      'salaryH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/salary.svg'));
    iconRegistry.addSvgIcon(
      'taxiH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/taxi.svg'));
    iconRegistry.addSvgIcon(
      'toiletriesH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/toiletries.svg'));
    iconRegistry.addSvgIcon(
      'transportH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/transport.svg'));
    iconRegistry.addSvgIcon(
      'equipmentH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/equipment.svg'));
    iconRegistry.addSvgIcon(
      'equipmentH',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/history_icons/equipment.svg'));


  }




}
