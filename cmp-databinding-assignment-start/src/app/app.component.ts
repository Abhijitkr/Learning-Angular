import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

emittedNumbers: number[] = [];
 
onGameStart(start: number[]){
this.emittedNumbers = start;
}


}
