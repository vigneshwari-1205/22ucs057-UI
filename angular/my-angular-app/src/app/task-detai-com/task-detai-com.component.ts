import { Component } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-detai-com',
  imports: [TaskserviceService],
  templateUrl: './task-detai-com.component.html',
  styleUrl: './task-detai-com.component.css'
})
export class TaskDetaiComComponent {
 @Input() task:string;
}

