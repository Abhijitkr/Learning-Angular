import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // count:number = 1;
  numbs:any[] = [];
  showSecret = false;

  addLogs(){
    this.showSecret = !this.showSecret;
    this.numbs.push(new Date());
    // this.count++;
  }

}
