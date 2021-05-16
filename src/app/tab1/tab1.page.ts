import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  myStatus: string;
  constructor(private storage: Storage,  private navCtrl: NavController) { }
  
  // get and store data
  ngOnInit() {
    this.storage.get("myStatus")
      .then((data) => {
        this.myStatus = data;
      })
      .catch();
  }
  saveStatus() {
    console.log(this.myStatus);
    this.storage.set("myStatus", this.myStatus)
    .then(
      () => {
      this.navCtrl.navigateForward('/status'); // forward to status page
      })
      .catch();
  }
}
