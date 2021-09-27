import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStart(start: number) {
    if(start %2==0){
      this.evenNumbers.push(start);
    }else{
      this.oddNumbers.push(start);
    }
  }

}
