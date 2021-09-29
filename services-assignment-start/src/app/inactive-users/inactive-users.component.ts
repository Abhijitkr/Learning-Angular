import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userServices: UserService){}

  ngOnInit(){
    this.users = this.userServices.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userServices.onSetToActive(id);
  }
}
