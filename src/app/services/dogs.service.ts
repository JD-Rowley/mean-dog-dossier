import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getRandomDogs() {
    let url = 'https://dog.ceo/api/breeds/image/random/3';
    return this.http.get(url);
  }
}
