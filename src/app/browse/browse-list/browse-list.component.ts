import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.css']
})
export class BrowseListComponent implements OnInit {
  @Input() dog: any;

  constructor() { }

  ngOnInit(): void {
  }

}
