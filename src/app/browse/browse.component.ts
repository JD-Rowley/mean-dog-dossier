import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  dogs: any = [];
  public breed: string;
  @Output() breedWasSelected = new EventEmitter<string>();

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.dogsService.getAllBreeds().subscribe(data => {
      this.dogs = data;
      console.log(this.dogs);
    })
  }
  
}
