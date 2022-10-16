import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  dog: any = [];
  breed: string;

  constructor(private dogsService: DogsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.breed = this.route.snapshot.params['name'];
    this.dogsService.getOneBreed(this.breed).subscribe(data => {
      this.dog = data;
    })
  }

}
