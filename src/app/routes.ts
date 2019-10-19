import { Routes } from "@angular/router";
import { MovieDetailsComponent } from "./movie/movie-details/movie-details.component";
import { MovieComponent } from "./movie/movie.component";

export const appRoutes: Routes = [
  { path: "movies", component: MovieComponent },
  { path: "movies/:id", component: MovieDetailsComponent },
  { path: "", redirectTo: "/movies", pathMatch: "full" }
];
