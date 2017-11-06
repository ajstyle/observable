import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks=[{id:1,task:"Learn Angular" ,state:"pending"},
      {id:2,task:"Learn Observables" ,state:"pending"}

]
  constructor() { }


  removeTask(task){
          this.tasks=this.tasks.filter(t=>
            t.id!=task.id
          )
  }

  updateTask(task){
    console.log(task) ;
          this.tasks=this.tasks.map(t=>{
            if(t.id==task.id)
                return task;
            else
              return t;
          })
  }


  ngOnInit() {
  }

}
