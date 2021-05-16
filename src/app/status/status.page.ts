import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})

export class StatusPage implements OnInit {
  myStatus: string;
  constructor(private storage: Storage) { }

  // get storage data
  ngOnInit() {
    this.storage.get("myStatus")
      .then((data) => {
        this.myStatus = data;
      })
      .catch ();
  }
}
