import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class DogsService {
  // dogs = [];
  apiKey = environment.API_KEY;

  constructor(private http: HttpClient) { }

  // async getRandomDogs() {
  //   const res = await fetch('https://api.thedogapi.com/v1/images/search?mime_types=gif&limit=3', {
  //     method: 'GET',
  //     headers: ({
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'x-api-key': this.apiKey
  //     })
  //   });
  //   console.log(res);
  // }
  getDogGifs() {
    return this.http.get('https://api.thedogapi.com/v1/images/search?mime_types=gif&limit=3');
  }
}
