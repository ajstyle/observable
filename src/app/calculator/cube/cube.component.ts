import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../calculator.service' ;

@Component({
  selector: 'app-cub',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class Cube1Component implements OnInit {
  result ;
  constructor(private CalculatorService : CalculatorService) {
 this.CalculatorService.getNumber().subscribe((n) => {
  this.result = n * n * n  ;
})
   }

  ngOnInit() {


  }

}
