import {identifierName} from '@angular/compiler'
import { Component} from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 4: Reactive Form (Sagolili & Pelingon)';
  isAddTask = false;

  taskList:Task[] = [{
    tasks:' Dishwashing',
    description: 'Washing of plates',
    assignedTo: 'Omne Jean Pelingon'
  }]
  addTask(task: Task){
    this.taskList.push(task);
    this.isAddTask = false;
  }
  
  addNewTask(){
    this.isAddTask = true;
  }
}


