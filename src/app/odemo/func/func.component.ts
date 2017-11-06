import { Component, OnInit } from '@angular/core';
import {OdemoService} from '../odemo.service' ; 
@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrls: ['./func.component.css']
})
export class FuncComponent {
  result : number ; 
  constructor(private odemoservice : OdemoService ) { 
  this.odemoservice.getNumber().subscribe((n : number ) => {   
      console.log(n) ; 
      this.result = (n * n) + 2 * n + 3 ; 
      console.log(this.result);
    });
  };
}
