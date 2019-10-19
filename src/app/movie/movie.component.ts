import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movies";
import { MovieService } from "src/app/services/movie.service";

@Component({
  // selector: "movie-app",
  templateUrl: "./movie.component.html"
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  //constructors are mainly used o import services
  constructor(private movieService: MovieService) {}
  //life cyclce method
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
