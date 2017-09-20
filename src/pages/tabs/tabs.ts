import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the BasicPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'tabs-basic',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage'
  feedRoot = 'FeedPage'
  favoriteRoot = 'FavoritePage'
  moreRoot = 'MorePage'
  settingsRoot = 'SettingsPage'


  constructor(public navCtrl: NavController) {}

}
