
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {CalculatorService} from '../calculator.service' ;

@Component({
  selector: 'app-ad',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class Add1Component implements OnInit {
result ;
  constructor(private CalculatorService : CalculatorService ) {
    this.CalculatorService.getNumber().subscribe((n) => {
  this.result = n + n  ;
})
   }

  ngOnInit() {


  }





}
