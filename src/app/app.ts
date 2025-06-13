import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Occupation } from './components/occupation/occupation';
import { Heavy } from './components/heavy-comp/heavy';
import { NgOptimizedImage } from '@angular/common';
import { Form } from './components/form/form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Pipes } from './components/pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Occupation, Heavy, NgOptimizedImage, RouterLink, Form, ReactiveForm, Pipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-trial';
  isLoggedIn = true;
  isServerRunning = false;
  operatingSystems = [
    {
      id: 'win',
      name: 'Windows'
    },
    {
      id: 'osx',
      name: 'MacOS'
    },
    {
      id: 'linux',
      name: 'Linux, THE GREATEST OF ALL TIME, THE GOAT'
    },
  ];

  users = [
    {
      id: 0,
      name: 'Shashwat'
    },
    {
      id: 1,
      name: 'Yash'
    },
    {
      id: 2,
      name: 'Shobhit'
    },
    {
      id: 3,
      name: 'ThePrimeagen'
    },
    {
      id: 4,
      name: 'TJ'
    },
  ];

  imageUrl = "https://fastly.picsum.photos/id/366/536/354.jpg?hmac=0zLENrpmiDb1-24bI4QNyxNLVOakd5Ro18l0cosPyQc"
  isEditable = true;

  message = '';

  greet() {
    window.alert('SUP, BOSSMAN')
  }

  onMouseOver() {
    this.message = 'CLASS COMPONENTS MENTIONED'
  }

  onMouseLeave() {
    this.message = ''
  }

  items = new Array();

  onEmit(item: number) {
    this.items.push(item)
  }

}
