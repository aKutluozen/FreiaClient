import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InventoryPage } from '../pages/inventory/inventory';
import { ShoppingPage } from '../pages/shopping/shopping';
import { CategoryPage } from '../pages/category/category';
import { CreateItemPage } from '../pages/create-item/create-item';
import {ViewItemsPage} from '../pages/view-items/view-items';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InventoryPage,
    ShoppingPage,
    CreateItemPage,
    CategoryPage,
    ViewItemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InventoryPage,
    ShoppingPage,
    CreateItemPage,
    CategoryPage,
    ViewItemsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
