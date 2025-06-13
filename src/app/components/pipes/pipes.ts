import { UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { StarPipe } from "../../../pipes/star-pipe";

@Component({
  selector: 'pipes',
  templateUrl: 'pipes.html',
  imports: [UpperCasePipe, StarPipe]
})

export class Pipes {
  loudMessage = 'neovim is the best!'
}
