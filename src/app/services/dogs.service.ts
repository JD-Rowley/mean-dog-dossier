import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogGifs() {
    return this.http.get('https://api.thedogapi.com/v1/images/search?mime_types=gif&limit=3');
  }

  getAllBreeds() {
    return this.http.get('https://api.thedogapi.com/v1/breeds');
  }

  getOneBreed(breed: string) {
    return this.http.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`);
  }
}
