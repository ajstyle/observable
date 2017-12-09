import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './user.service';
import { AddComponent } from './odemo/add/add.component';
import { SquareComponent } from './odemo/square/square.component';
import { CubeComponent } from './odemo/cube/cube.component';
import { SqrtComponent } from './odemo/sqrt/sqrt.component';
import { FuncComponent } from './odemo/func/func.component' ;
import {OdemoService } from './odemo/odemo.service';
import { MyDemoComponent } from './odemo/my-demo/my-demo.component';
import { TodoComponent } from './todo/todo.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoDemoComponent } from './todo-demo/todo-demo.component';
import { TodoTaskdemoComponent } from './todo-taskdemo/todo-taskdemo.component';
import { DemoComponent } from './calculator/demo/demo.component' ;
import {CalculatorService} from './calculator/calculator.service' ;
import {Add1Component} from './calculator/add/add.component' ;
import { Cube1Component } from './calculator/cube/cube.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,

    AddComponent,
    SquareComponent,
    CubeComponent,
    SqrtComponent,
    FuncComponent,
    MyDemoComponent,
    TodoComponent,
    TodoTaskComponent,
    TodoDemoComponent,
    TodoTaskdemoComponent,
    DemoComponent,
    Add1Component,
    Cube1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService, OdemoService , CalculatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
