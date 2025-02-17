import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-databind',
  imports: [CommonModule,DatabindComponent],
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {
  @Input() msg:String=""
  @Output() triger: EventEmitter<string> = new EventEmitter<string>();

  name:String="vigneshwari"
  path="https://media.istockphoto.com/id/183412466/photo/eastern-bluebirds-male-and-female.jpg?s=612x612&w=0&k=20&c=6_EQHnGedwdjM9QTUF2c1ce7cC3XtlxvMPpU5HAouhc="

  callmsg(){
    alert("welcome")
    this.triger.emit("value from child")
  }

}
