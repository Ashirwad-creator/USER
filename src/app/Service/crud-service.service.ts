import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})


export class CrudService {
  users: User[] = [];
  shouldEdit: boolean = false;
  constructor() { }

  
  getUsers() {

  }

  editUser(user:User){
    console.log("Edit User",user);
    this.shouldEdit = true;
    const index= this.users.indexOf(user);
    this.users.splice(index,1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  deleteUsers() {

  }
}
