import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-demo',
  templateUrl: './todo-demo.component.html',
  styleUrls: ['./todo-demo.component.css']
})
export class TodoDemoComponent implements OnInit {

  tasks = [
    {id: 1 , name : 'Learn Angular' , state : 'pending' } ,
   {id: 2 , name : 'Learn Observable' , state : 'pending'}
  ] ;

  constructor() { }

  update(task) {
     console.log(task) ;
     this.tasks = this.tasks.map(t=>{
       if(t.id == task.id)
        return task ;
      else
        return t ;

      })
  }

  delete(task) {
    console.log(task) ;
this.tasks = this.tasks.filter(t=>t.id!=task.id)
  }

  ngOnInit() {
  }

}
