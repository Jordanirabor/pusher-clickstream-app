

import { PusherService } from './../services/pusher.service';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  data = {
    '/burger': {
      clicks: 0,
      purchases: 0
    },
    '/chips': {
      clicks: 0,
      purchases: 0
    }
  };
  burgerChart: Chart;
  chipsChart: Chart;
  constructor(private pusher: PusherService) {
    this.pusher.channel.bind('client-click', (data) => {
      if (data.item) {
        this.data[data.page].purchases++;
      } else {
        this.data[data.page].clicks++;
      }
      const clicks = this.data[data.page].clicks;
      const purchases = this.data[data.page].purchases;
      if (data.page === '/burger') {
        this.burgerChart.data.datasets[0].data = [clicks, purchases];
        this.burgerChart.update();
      } else {
        this.chipsChart.data.datasets[0].data = [clicks, purchases];
        this.chipsChart.update();
      }
    });
  }

  ngOnInit() {
    const burgerChart: any = document.getElementById('burgerChart');
    const chipsChart: any = document.getElementById('chipsChart');
    this.burgerChart = this.constructChart(
      'Burger Page Dataset',
      burgerChart, [this.data['/burger'].clicks,
      this.data['/burger'].purchases]
    );
    this.chipsChart = this.constructChart(
      'Chips Page Dataset',
      chipsChart,
      [this.data['/chips'].clicks,
      this.data['/chips'].purchases]
    );
  }
  constructChart(label: string, chartElement: any, data: any[]) {
    return new Chart(chartElement, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset
      data: {
        labels: ['Clicks', 'Purchases'],
        datasets: [{
          label,
          backgroundColor: ['#0060b6', 'rgb(255, 99, 132)'],
          borderColor: ['#0060b6', 'rgb(255, 99, 132)'],
          data
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}