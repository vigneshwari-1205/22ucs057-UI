import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  private tasks: string[]=['wakeup','study','play','sleep'];
  getTasks(){
    return this.tasks;
  }
}
