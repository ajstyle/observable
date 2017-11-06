import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
@Output()del:EventEmitter<any> =new EventEmitter();

@Output()stateChanged:EventEmitter<any> =new EventEmitter();

@Input()task:any;
/*
  {  id,state,text}

*
 * /
 * @memberof TodoTaskComponent
 */
  constructor() { }

  delete(){
    this.del.emit(this.task)
  }
  changeState(state){
    this.task.state=state;
    this.stateChanged.emit(this.task);
  }

  ngOnInit() {
  }

}
