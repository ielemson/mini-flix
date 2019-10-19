import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../services/movie.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  // selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}
  movie: any;
  ngOnInit() {
    this.movie = this.movieService.getMovie(+this.route.snapshot.params["id"]);
  }
}
