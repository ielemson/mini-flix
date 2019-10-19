import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { MovieComponent } from "./movie/movie.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MovieItemComponent } from "./movie/movie-item/movie-item.component";
import { MovieDetailsComponent } from "./movie/movie-details/movie-details.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { from } from "rxjs";
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
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
