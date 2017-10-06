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
  items: any = [
    "ali", "veli", "adil", "veli", "adil", "veli", "adil", "veli", "adil", "veli", "adil"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
  }

  onAddItemPage() {
    this.navCtrl.push(CreateItemPage);
  }

}
