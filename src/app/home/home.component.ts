import { Component, OnInit , OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Observer } from 'rxjs/Observer';

import 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy  {
   subcription : Subscription ; 
  constructor() {}
   
  ngOnInit() {
    const myNumbers = Observable.interval(1000);
 this.subcription =  myNumbers.subscribe((number: number) => {
      console.log(number);
     
    });
 
   
    const myObservable = Observable.create( (observer : Observer<string> ) => {
      setTimeout(() => {
      observer.next('first Package') ; 
      } , 2000) ; 
       setTimeout(() => {
      observer.next('Second Package') ; 
      } , 4000) ; 
       setTimeout(() => {
      observer.complete() ; 
      } , 5000) ; 

    setTimeout(() => {
      observer.error('THis is not work') ; 
      } , 6000) ; 

    }) ; 
    myObservable.subscribe(
      (data: string) => {console.log(data) ; },
      (error: string) => {console.log(error) ; },
      () => {console.log('completed') ; }
    );
  }
   ngOnDestroy() {
 this.subcription.unsubscribe() ; 
    }
}
