import { Component } from '@angular/core';
import {Task} from './models/task.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular';
  currentFocus: string = 'Angular Homework';
  tasks: Task = new Task('temp')
  tak: Task[] = this.tasks.genUrl();
}
