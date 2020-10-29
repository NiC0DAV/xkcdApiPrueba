import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {
  _url = 'https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json';
  constructor(
    private http: HttpClient
  ) {
    console.log("Serivicio Lanazado");
   }

   getComics(){
     let header = new HttpHeaders()
       .set('Type-content', 'aplication/json');

       return this.http.get(this._url,{
         headers: header
       });
     }
}
