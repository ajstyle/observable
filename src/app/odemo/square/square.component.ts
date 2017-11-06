import { Component, OnInit } from '@angular/core';
import {OdemoService } from '../odemo.service' ; 
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  result : number ; 
  constructor(private odemoservice: OdemoService  ) {
    this.odemoservice.getNumber().subscribe((n) => {
            
      this.result = n * n ;

    });
  }

  ngOnInit() {
  }

}
