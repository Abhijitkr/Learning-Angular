import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  createServerStatus: string = "No Server was created!";
  inputText = "Test";
  serverInput: boolean = false;

  constructor() {
    setTimeout(()=>{
      return this.allowNewServer = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverInput = true;
    this.createServerStatus = this.inputText + " server was Created!";
  }

  // onTextInput(event: Event){
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

}
