import { Component } from '@angular/core';
import { XkcdService } from './services/xkcd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xkcdPrueba';
  public comicData:any;

  constructor(private xkcdService:XkcdService){
    this.executeCall();
  }

  executeCall(){
    this.xkcdService.getComics().subscribe(response=>{
      this.comicData = response;
    },
    error =>{
      console.log(JSON.stringify(error));
    });
  }
}
