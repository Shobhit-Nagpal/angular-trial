import { Component, inject, input, output } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'user-occupation',
  templateUrl: './occupation.html',
})
export class Occupation {
  userService = inject(UserService);
  users = new Array();
  occupation = input<string>();
  handleEmitClickEvent = output<number>();

  emit() {
    this.handleEmitClickEvent.emit(0)
  }

  getUsers() {
    this.users = this.userService.getUsers()
  }
}
