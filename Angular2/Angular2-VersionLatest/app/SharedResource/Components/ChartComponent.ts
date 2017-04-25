import { Component, Input, OnInit } from '@angular/core';
import { HttpCallService } from '../../Services/HttpCall.Service'

@Component({
  selector: 'chart-component',
  templateUrl: '/app/SharedResource/Templates/chart.html'
})
export class ChartComponent implements OnInit {
  // Doughnut
  @Input() EventName: string;
  @Input() Hours: Number;
  doughnutChartLabels: string[] = ["Error", "Info", "Warning"];
  doughnutChartData: Number[] = [0, 0, 0];
  @Input() doughnutChartType: string = 'doughnut';

  constructor(private httpService: HttpCallService) {
  }

  ngOnInit() {
    this.httpService.OpenRequest();
    this.httpService.httpMethodtype = "Get";
    this.httpService.Url = "api/ECH/Event/GetChartDataForLogs";
    this.httpService.param = "/" + this.EventName + "/" + this.Hours;
    this.httpService.CallHttpService().subscribe(
      res => this.parseResult(res),
      error => () => { this.httpService.CloseRequest(); });

  }
  parseResult(res: any) {
   
    var chartData=[0,0,0]
    var i = 0;
    this.doughnutChartLabels.forEach(function (data: any) {
      var p = data;
      res.forEach(function (d) {
        if (p == d.name) {
          chartData[i] = d.count;
        }
      })
       i = i + 1;
    })
    this.doughnutChartData=chartData;
    this.httpService.CloseRequest();
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}