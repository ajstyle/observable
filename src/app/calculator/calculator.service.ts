import { Injectable  } from '@angular/core';
import {BehaviorSubject} from 'rxjs' ;

@Injectable()
export class CalculatorService {

  public myNumber : BehaviorSubject<number> ;
  constructor() {
    this.myNumber = new BehaviorSubject(0) ;
  }

  setNumber(n) {
    this.myNumber.next(n)
  }
  getNumber() {
    return this.myNumber ;
  }

}
