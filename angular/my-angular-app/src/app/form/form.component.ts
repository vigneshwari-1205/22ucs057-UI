import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  onSubmit(f: NgForm) {
    if(f.invalid){
      return;
    } 
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(f.value, null, 4));
  }
}
