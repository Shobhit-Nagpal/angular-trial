import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.html',
  imports: [ReactiveFormsModule],
})
export class ReactiveForm {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' ' + this.profileForm.value.email);
  }
}
