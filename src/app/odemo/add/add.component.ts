import { Component, OnInit } from '@angular/core';
import {OdemoService } from '../odemo.service' ; 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  result : number ; 
  constructor(private odemoservice: OdemoService  ) {
    this.odemoservice.getNumber().subscribe((n) => {
            
      this.result = n * n;

    });

   }

  ngOnInit() {

  }

}
