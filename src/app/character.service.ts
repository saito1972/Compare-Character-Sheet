import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CHARACTER } from './mock-character';
import { of, Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
  ) { }

  getCharacter(url): Observable<Character> {
    // return of(CHARACTER);
    // const url = 'https://charasheet.vampire-blood.net/mf425124cdc9ffd7cbd06a1af8a949d0d.js';
    return this.http.jsonp<Character>(url + '.js', 'callback');
  }
}
