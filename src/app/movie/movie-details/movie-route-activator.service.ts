import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { MovieService } from "../../services/movie.service";
@Injectable()
export class MovieRouteActivator implements CanActivate {
  constructor(private movieService: MovieService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const movieExist = !!this.movieService.getMovie(+route.params["id"]);
    if (!movieExist) this.router.navigate(["/404"]);
    return movieExist;
  }
}
