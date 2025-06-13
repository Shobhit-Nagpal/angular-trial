import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'user-form',
  templateUrl: './form.html',
  imports: [FormsModule],
})

export class Form {
  favouriteFramework = '';

  showFramework() {
    alert(this.favouriteFramework);
  }
}
