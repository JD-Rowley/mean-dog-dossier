import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class DogsService {
  apiKey = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getDogGifs() {
    return this.http.get('https://api.thedogapi.com/v1/images/search?mime_types=gif&limit=3');
  }

  getAllBreeds() {
    return this.http.get('https://api.thedogapi.com/v1/breeds');
  }
}
