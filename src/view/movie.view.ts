import { MovieController } from "../controller/movie.controller";

export class MovieView {

  public template: string = '';
  public movies: string[] = []

  constructor(private controller: MovieController) {}

  public renderTemplate(): string {
    return this.template;
  }

  public addToFavorite(handler: Function) {}

  public getMovies(handler: Function) {
    this.movies = this.controller.getMovies();
    this.template = this.movies.join('');
  }


}