import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  localNotification() {
    console.log('called');
    Plugins.LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'ようこそ',
          body: 'Ionic Frameworkへ'
        }
      ]
    });
  }
}
