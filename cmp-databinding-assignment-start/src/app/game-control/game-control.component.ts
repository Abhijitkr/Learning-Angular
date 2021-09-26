import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<number[]>();

  numbs: number[] = [];
  count: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    setInterval(()=>{
      this.numbs.push(this.count++);
    }, 1000)

    this.startGame.emit(this.numbs);
  }

}
