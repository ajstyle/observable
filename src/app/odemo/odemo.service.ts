import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OdemoService {

  private myNumber: BehaviorSubject<number>;

  constructor() {
    this.myNumber = new BehaviorSubject(0);
  }

  setNumber(num: number){
    this.myNumber.next(num);
  }

  getNumber(){
    return this.myNumber;
  }

}
