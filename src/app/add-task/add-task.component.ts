import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  ngOnInit(){
    this.taskForm.reset();
  }

  @Output() taskOut = new EventEmitter();
  //creating variable to define formGroup
  taskForm = new FormGroup({
    task: new FormControl(''),
    description: new FormControl(''),
    assignedTo: new FormControl('')
  })

  addTask(){
    this.taskOut.emit(this.taskForm.value)
  }
}
