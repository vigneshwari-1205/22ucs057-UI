import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetaiComComponent } from './task-detai-com.component';

describe('TaskDetaiComComponent', () => {
  let component: TaskDetaiComComponent;
  let fixture: ComponentFixture<TaskDetaiComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetaiComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetaiComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
