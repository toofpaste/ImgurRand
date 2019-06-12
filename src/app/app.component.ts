import { Component } from '@angular/core';
import {Task} from './models/task.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showClick = false;
  ready = false;
  tasks: Task = new Task('temp')
  tak: Task[] = this.tasks.genUrl();
  tak1: string[] = [];
  showImage(tak){
    this.tak1 = [];
    this.ready = false;
    for(var i = 0; i < this.tak.length; i++){
      var holdNam = this.tak[i].toString();
      var hold = document.getElementById(holdNam);
      if(hold.clientWidth > 162){
        this.tak1.push(holdNam);
      }
    }
    if(this.tak1.length <= 50){
      this.tak = this.tasks.genUrl();
      this.showImage(this.tak1);
    }
    this.tak = [];
    this.showClick = true;
    this.loadMore();
  }
  loadMore(){
    this.tak = this.tasks.genUrl();
    this.ready = true;
  }
}
