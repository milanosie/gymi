import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
        if(!localStorage.getItem( 'gimmy_account' )) {
            this.rootPage = RegistrationPage;
        }else{
            this.rootPage = LoginPage;
        }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}