import { Component, OnInit } from '@angular/core';
import {OdemoService } from '../odemo.service' ; 
@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  result: number ; 
  constructor(private odemoservice: OdemoService  ) {
    this.odemoservice.getNumber().subscribe((n: number) => {
            console.log(n);
      this.result = n * n * n ;

    });
  }
  
  ngOnInit() {
  }

}
