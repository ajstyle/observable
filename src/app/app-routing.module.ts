import { TodoComponent } from './todo/todo.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from  './user/user.component';
import { MyDemoComponent } from './odemo/my-demo/my-demo.component' ;
import {TodoDemoComponent} from './todo-demo/todo-demo.component' ;''
import {DemoComponent} from './calculator/demo/demo.component' ;
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'odemo', component: MyDemoComponent},
  {path: 'todo', component: TodoComponent},
  { path:'todoDemo' , component : TodoDemoComponent},
  {path : 'calculator' , component : DemoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

