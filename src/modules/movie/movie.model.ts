
export interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export default class MovieModel implements Movie {
  public title: string;
  public year: string;
  public imdbID: string;
  public type: string;
  public poster: string;

  constructor(title: string, year: string, imdbID: string, type: string, poster: string) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.type = type;
    this.poster = poster;
  }
}
