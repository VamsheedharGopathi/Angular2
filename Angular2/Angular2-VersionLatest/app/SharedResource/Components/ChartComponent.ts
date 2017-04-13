import { Component } from '@angular/core';
import {HttpCallService} from '../../Services/HttpCall.Service'
 
@Component({
  selector: 'chart-component',
  templateUrl: '/app/SharedResource/Templates/chart.html'
})
export class ChartComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor(private httpService:HttpCallService){
      
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}