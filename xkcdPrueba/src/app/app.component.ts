import { Component } from '@angular/core';
import { XkcdService } from './services/xkcd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xkcdPrueba';

  constructor(
    private xkcdService:XkcdService
  ){

  }
}
