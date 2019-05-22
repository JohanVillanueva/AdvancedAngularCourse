import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input()
  lineChartData: number[]=[];
  @Input()
  lineChartLabels: Label[]=[];
  @Input()
  lineChartType:string='doughtnut';

  constructor() {}

  ngOnInit() {
  }

}
