import { Component, OnInit } from '@angular/core';
import {OdemoService } from '../odemo.service' ; 
@Component({
  selector: 'app-sqrt',
  templateUrl: './sqrt.component.html',
  styleUrls: ['./sqrt.component.css']
})
export class SqrtComponent implements OnInit {

   result : number ; 
  constructor(private odemoservice: OdemoService  ) {

    this.odemoservice.getNumber().subscribe((n : number ) => {
            
      console.log(n) ; 
      this.result = Math.sqrt(n); 

      console.log(this.result);

    });
  }

  ngOnInit() {
  }

}
