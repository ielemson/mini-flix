import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
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
  }
];
