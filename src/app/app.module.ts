import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
// import { MovieComponent } from "./movie/movie.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
// import { MovieItemComponent } from "./movie/movie-item/movie-item.component";
// import { MovieDetailsComponent } from "./movie/movie-details/movie-details.component";
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { MovieRouteActivator } from "./movie/movie-details/movie-route-activator.service";
import { Error404Component } from "./movie/errors/error404/error404.component";
// import { MovieListResolverService } from "./movie/movie-list-resolver.service";

//MULTIPLE MOVIE COMPONENT IMPORTS**************************************
import {
  MovieComponent,
  MovieListResolverService,
  MovieDetailsComponent,
  MovieItemComponent
} from "./movie/index";
import { FavouriteMovieComponent } from "./movie/favourite-movie/favourite-movie.component";
//MULTIPLE MOVIE COMPONETIMPORTS**************************************
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MovieComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    Error404Component,
    FavouriteMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule
  ],
  providers: [MovieRouteActivator, MovieListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
