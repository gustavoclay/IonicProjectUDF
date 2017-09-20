import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritePage } from '../pages/favorite/favorite';
import { FeedPage } from '../pages/feed/feed';
import { MorePage} from '../pages/more/more';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { HomePageModule } from '../pages/home/home.module';
import { FavoritePageModule } from '../pages/favorite/favorite.module';
import { FeedPageModule } from '../pages/feed/feed.module';
import { MorePageModule} from '../pages/more/more.module';
import { SettingsPageModule } from '../pages/settings/settings.module';




@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    FavoritePageModule,
    FeedPageModule,
    MorePageModule,
    SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritePage,
    FeedPage,
    MorePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
