import { DBHelper } from "../common/db.helper";
import { MovieModel } from "../model/movie.model";

export class MovieService {

  /**
   * MOCK
   */

  public movies: any  = [
    { id: 1, name: 'The Matrix', description: 'The matrix plot' },
    { id: 1, name: 'Tron', description: 'Tron plot' }
  ]


  constructor() {

  }

  getMovies(): MovieModel[] {
    return this.movies;
  }

  searchMovie(query: string) {

  }

  getFavorites() {

  }

  addToFavorites(data: MovieModel[]) {
    // this.db.save(data);
  }
}