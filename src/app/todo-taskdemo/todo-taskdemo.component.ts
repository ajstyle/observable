import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-taskdemo',
  templateUrl: './todo-taskdemo.component.html',
  styleUrls: ['./todo-taskdemo.component.css']
})
export class TodoTaskdemoComponent implements OnInit {

@Input() task: any ;
@Output() stateChange:EventEmitter<any> = new EventEmitter() ;
@Output() del:EventEmitter<any> = new EventEmitter() ;
  constructor() { }

  ngOnInit() {

  }

remove() {

this.del.emit(this.task) ;
}
changeState(state) {
  this.task.state = state ;
this.stateChange.emit(this.task) ;
}

}
