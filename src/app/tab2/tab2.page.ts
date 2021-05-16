import { Component, OnInit } from '@angular/core';
import { CovidService } from '../Services/covid.service';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  CovidData:any = [];
  lat:any = [];
  long:any = [];
  constructor(private covidService:CovidService, private navCtrl:NavController, private gps:Geolocation) {}

  // get covid data
  ngOnInit(){
    this.covidService.GetCovidData().subscribe(
      (data)=>{
        this.CovidData = data.result;
      }
    );
  }

  // forward to chart page
  openChartPage(){
    this.navCtrl.navigateForward('/chart');
  }

  // get and output current gps
  GetGPS() {
    this.gps.getCurrentPosition()
    .then((res)=>{
        this.lat = res.coords.latitude
        this.long = res.coords.longitude
    })
    .catch((error)=>{
      console.log(error);
    });
  }
}
