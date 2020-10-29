import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class XkcdService {
  
  constructor(private http: HttpClient) {}

  getComics():Observable<any>{
    let randomComic = Math.floor((Math.random() * 1200) + 600);
    let header = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/'+randomComic+'/info.0.json',{
      headers: header
    });
  }
}
