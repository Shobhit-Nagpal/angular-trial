import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    return [
      {
        id: 0,
        name: 'Shashwat',
      },
      {
        id: 1,
        name: 'Yash',
      },
      {
        id: 2,
        name: 'Shobhit',
      },
      {
        id: 3,
        name: 'ThePrimeagen',
      },
      {
        id: 4,
        name: 'TJ',
      },
    ];
  }
}
