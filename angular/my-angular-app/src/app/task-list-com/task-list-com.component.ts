import { Component } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-task-list-com',
  imports: [TaskserviceService],
  templateUrl: './task-list-com.component.html',
  styleUrl: './task-list-com.component.css'
})
export class TaskListComComponent {
  tasks:string[];
  constructor(private taskService:TaskserviceService){
    this.tasks=TaskserviceService.getTasks();
}
}
