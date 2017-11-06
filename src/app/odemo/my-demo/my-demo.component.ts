import { Component, OnInit } from '@angular/core';
import {OdemoService } from '../odemo.service' ; 
@Component({
  selector: 'app-my-demo',
  templateUrl: './my-demo.component.html',
  styleUrls: ['./my-demo.component.css']
})
export class MyDemoComponent implements OnInit {

  constructor(private OdemoService: OdemoService ) { }
  
  numberChanged(n){
  this.OdemoService.setNumber(n) ; 
  }
  ngOnInit() {
  }

}

