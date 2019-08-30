import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages =[
    
    {
      title: "Profile",
      // url: "/userprofile-page",
      // icon:"user"
    },
    
    {
      title: "Home",
      url: "/homepage",
      // icon: "home"
    },

    {
      title: "Contact Us",
      // url: "/customercare",
      // icon: "services"
    },

    {
      title: "Logout",
      // url:
      // icon: "logout"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
