import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  
  users: Array<User> = new Array<User>();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
}
