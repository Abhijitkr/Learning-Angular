import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[] = [];
 
  constructor(private userServices: UserService){}

  ngOnInit() {
    this.users = this.userServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userServices.onSetToInactive(id);
  }
}
