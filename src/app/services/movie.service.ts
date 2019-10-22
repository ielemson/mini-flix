// import {
//   HttpClientModule,
//   HttpClient,
//   HttpHeaders
// } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor() {}
  //GET ALL MOVIES FROM THE OBJECT
  getMovies() {
    //this helps the page act asyncly
    let subject = new Subject();
    setTimeout(() => {
      subject.next(MOVIES);
      subject.complete();
    }, 1000);
    //return the observable
    return subject;
  }

  getMovie(id: number) {
    return MOVIES.find(movie => movie.id === id);
  }
}

const MOVIES = [
  {
    id: 1,
    title: "Avengers End Game",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/end-game.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 2,
    title: "Captain Marvel",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/captain-marvel.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 3,
    title: "Spider Man",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/spider-man.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 4,
    title: "IT Chapter 2",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/it_chapter_two_pennywise_poster.png",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 5,
    title: "Wonder Woman",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/wonder-woman.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 6,
    title: "Dead Pool",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/dead-pool.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 7,
    title: "Merry Men",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/merry-men.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 8,
    title: "Lion Heart",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/lion-heart.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 9,
    title: "how to train your dragon",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl:
      "https://res.cloudinary.com/ielemson/image/upload/v1571712299/netflix-mini/train-your-dargon_pda65t.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 10,
    title: "dora and the city lost gold",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl: "../../assets/img/movie/Dora-City-Lost-Gold-Isabela-Moner.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 11,
    title: "lego dc batman:family matter",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl:
      "https://res.cloudinary.com/ielemson/image/upload/v1571714456/netflix-mini/batman_xui4ly.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  },
  {
    id: 12,
    title: "the kid who would be king",
    rated: "5 star",
    writer: "Anthony Russo, Joe Russo",
    imgurl:
      "https://res.cloudinary.com/ielemson/image/upload/v1571242884/netflix-mini/kids-movies-2019-the-kid-who-would-be-king_gvsyrz.jpg",
    date: "1/04/2019",
    duration: "3h 2m",
    director: "Stan Lee, Jack Kirby, Jim Starlin",
    movie_details: ""
  }
];
