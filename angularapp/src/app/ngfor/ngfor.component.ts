import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title : string = "Top 3 Bollywood Movies"
  movies: Movie[] = [
    {
      title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2009'
    },
    {
      title: 'Laggan', director: 'Ashutosh', cast: 'Amir', releaseDate: '2000'
    }, {
      title: 'Tanhji: The Unsung warrior', director: 'Om Raut', cast: 'Ajay Devagan', releaseDate: '2020'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}
