import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  createServerStatus: string = "No Server was created!";
  inputText = "";

  constructor() {
    setTimeout(()=>{
      return this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.createServerStatus = "New Server was created!";
  }

  onTextInput(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }

}
