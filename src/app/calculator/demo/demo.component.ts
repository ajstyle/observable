import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../calculator.service' ;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private CalculatorService : CalculatorService) { }

  ngOnInit() {
  }

  numberChanged(n) {
    this.CalculatorService.setNumber(n) ;
  }

}
