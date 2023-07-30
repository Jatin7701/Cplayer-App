import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Favs } from './fav';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

@Injectable({
  providedIn: 'root'
})

export class CricapiService {

  constructor(private http: HttpClient) {

   }

  apikey: string = "55044936-c286-49f1-a4a7-7bb8b49344b5";
  searchPlayer(name: string): Observable<any> {
    return this.http.get(`https://api.cricapi.com/v1/players?apikey=${this.apikey}`, {
      params: new HttpParams().set("search", name)
    });
  }
  randomPlayer(): Observable<any> {
    return this.http.get(`https://api.cricapi.com/v1/players?apikey=${this.apikey}`, {
      params: new HttpParams().set("offset",randomIntFromInterval(300,500).toString() )
    });
  }

  statsPlayer(pid: any): Observable<any> {
    return this.http.get(`https://api.cricapi.com/v1/players_info?apikey=${this.apikey}`, {
      params: new HttpParams().set("id", pid)
    })
  }
  
  newsSports():Observable<any>{
    return this.http.get<any>('http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=144d87b6f02944989fc3e65deaae19a6')
  }

  pickPlayerStatsResults(response) {
    return response;
  }


}
