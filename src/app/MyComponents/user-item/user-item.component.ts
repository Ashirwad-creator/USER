import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudService } from 'src/app/Service/crud-service.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})


export class UserItemComponent implements OnInit {
  @Input()
  user: User = new User;
  @Output() userDelete: EventEmitter<User> = new EventEmitter();
  shouldEditUser: boolean = false;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }
    onclick(user:User) {
      this.userDelete.emit(user);
      console.log("onclick has been triggered")
    }

    onEdit(user:User) {
      this.shouldEditUser = true;
      this.crudService.editUser(user);
    }

    onSave(user:User) {
      this.shouldEditUser = false;
      this.crudService.editUser(user);
    }
}
