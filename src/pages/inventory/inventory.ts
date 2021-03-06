import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateItemPage } from '../create-item/create-item';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {
  categories: any = [
    "Protein", "Dairy", "Vegetables", "Fruits", "Oils", "Grains", "Carbonhydrates"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage 123');
  }

  onAddItemPage() {
    this.navCtrl.push(CreateItemPage);
  }
}
