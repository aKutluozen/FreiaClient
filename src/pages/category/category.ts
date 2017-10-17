import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventoryPage } from '../inventory/inventory';   //This page would show list of categories.....then it will fetch contents 
import { CreateItemPage } from '../create-item/create-item';
//from the API for that category. 

import {ViewItemsPage} from '../view-items/view-items';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

tab1;
tab2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1 = InventoryPage;
    this.tab2 = ViewItemsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
