import { Routes } from "@angular/router";
import { MovieDetailsComponent } from "./movie/movie-details/movie-details.component";
import { MovieComponent } from "./movie/movie.component";
import { Error404Component } from "./movie/errors/error404/error404.component";
import { MovieRouteActivator } from "./movie/movie-details/movie-route-activator.service";
import { MovieListResolverService } from "./movie/movie-list-resolver.service";
export const appRoutes: Routes = [
  {
    path: "movies",
    component: MovieComponent,
    resolve: { movies: MovieListResolverService }
  },
  {
    path: "movies/:id",
    component: MovieDetailsComponent,
    canActivate: [MovieRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/movies", pathMatch: "full" }
];
