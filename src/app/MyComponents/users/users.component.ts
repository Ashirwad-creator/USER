import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})



export class UsersComponent implements OnInit {
  localItem : string ;

  users: User[];


  constructor() {
    this.localItem = localStorage.getItem("users")!;

    if(this.localItem ==null) {
    this.users = [];
    }
    else{
      this.users= JSON.parse(this.localItem);
    }


  }

  ngOnInit(): void {
  }
  deleteUser(user:User){
    console.log(user);
    const index= this.users.indexOf(user);
    this.users.splice(index,1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }
  AddUser(user:User){
    console.log(user);

    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

}