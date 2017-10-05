import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InventoryPage } from '../inventory/inventory';
import { ShoppingPage } from '../shopping/shopping';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToInventory() {
    this.navCtrl.push(InventoryPage);
  }

  onGoToShopping() {
    this.navCtrl.push(ShoppingPage);
  }
}
