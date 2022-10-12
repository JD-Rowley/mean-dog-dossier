import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  dogs: any = [];

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.dogsService.getAllBreeds().subscribe(data => {
      console.log(data);
      this.dogs = data;
    })
  }

}
