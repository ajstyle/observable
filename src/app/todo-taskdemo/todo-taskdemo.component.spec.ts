import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskdemoComponent } from './todo-taskdemo.component';

describe('TodoTaskdemoComponent', () => {
  let component: TodoTaskdemoComponent;
  let fixture: ComponentFixture<TodoTaskdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTaskdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
