import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskserviceService } from '../taskservice.service';
import { TaskListComComponent } from '../task-list-com/task-list-com.component';




@NgModule({
  declarations: [TaskListComComponent],
  imports: [CommonModule,TaskserviceService,TaskListComComponent],
  providers: [TaskserviceService],
})
export class TaskListModule { }
