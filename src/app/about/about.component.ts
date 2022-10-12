import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any = [];

  constructor() {}

  ngOnInit(): void {
  }

}
