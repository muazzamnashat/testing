import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'playwith-tailwind-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  name: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.movie);
  }
}
