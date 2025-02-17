import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComComponent } from './task-list-com.component';

describe('TaskListComComponent', () => {
  let component: TaskListComComponent;
  let fixture: ComponentFixture<TaskListComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
