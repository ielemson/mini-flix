import { MovieService } from "./../services/movie.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class MovieListResolverService implements Resolve<any> {
  constructor(private movieService: MovieService) {}
  resolve() {
    return this.movieService.getMovies().pipe(map(movies => movies));
  }
}
