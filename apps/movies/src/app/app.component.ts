import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import * as data from './movies.json';
@Component({
  selector: 'playwith-tailwind-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Movie List';
  movies: any;

  constructor() {}
  ngOnInit(): void {
    // this.movies = (data as any).default;
    // this.movies$.subscribe((data) => console.log(data));
    // for testing
  }
}
