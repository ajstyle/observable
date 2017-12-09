import { Component, OnInit } from '@angular/core';
import {OdemoService } from '../odemo.service' ;
import {CalculatorService} from '../../calculator/calculator.service' ;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  result : number ;
  constructor(private odemoservice: OdemoService  , private calculatorService : CalculatorService ) {
    this.odemoservice.getNumber().subscribe((n) => {

      this.result = n * n;

    });
this.calculatorService.getNumber().subscribe((n) => {
  console.log(n) ;

})
   }

  ngOnInit() {

  }

}
