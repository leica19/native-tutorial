import { Badge } from '@ionic-native/badge/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public badge: Badge
  ) {}

  upBadge() {
    this.badge.increase(1);
  }

  clearBadge() {
    this.badge.clear();
  }

}
