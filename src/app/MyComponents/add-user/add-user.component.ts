import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CrudService } from 'src/app/Service/crud-service.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent implements OnInit {
  name!: string;
  email!: string;
  Id!: string;
  @Output() userAdd: EventEmitter<User> = new EventEmitter();
  dialogRef: any;

  users: User[] | undefined;





  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

  }
  onsubmit(){
    const user = {
      sno:8,
      name: this.name,
      email: this.email,
      Id: this.Id,
      active: true
    }

    this.userAdd.emit(user);
   
  }

}
