import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movies";
import { MovieService } from "src/app/services/movie.service";
@Component({
  // selector: "movie-app",
  templateUrl: "./movie.component.html"
})
export class MovieComponent implements OnInit {
  movies: any;
  //constructors are mainly used o import services
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}
  //life cyclce method
  ngOnInit() {
    // this.movieService.getMovies().subscribe(movies => {
    //   this.movies = movies;
    // });
    this.movies = this.route.snapshot.data["movies"];
  }
}
