import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { CovidService } from '../Services/covid.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage {
  CovidData:any = [];
  constructor(private covidService:CovidService) { }

  // invoke chart
  ionViewDidEnter() {
    this.plotSimplePieChart();
  }

  plotSimplePieChart() {
    let myChart = HighCharts.chart('pieChart', { // use id 'pieChart'
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'COVID-19 Cases' // title
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Confirmed',
          y: this.CovidData.confirmed, // get data from http
          sliced: true,
          selected: true
        }, {
          name: 'Recovered',
          y: this.CovidData.recovered // get data from http
        }, {
          name: 'Deaths',
          y: this.CovidData.deaths // get data from http
        }]
      }]
    });
  }

  // get/subscribe data from http
  ngOnInit() {
    this.covidService.GetCovidData().subscribe(
      (data)=>{
        this.CovidData = data.result;
        console.log(this.CovidData);
      }
    );
  }

}
