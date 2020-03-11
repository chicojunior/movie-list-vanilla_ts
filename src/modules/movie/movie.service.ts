import { DBHelper } from "../../common/db.helper";
import { MovieModel } from "./movie.model";
import { LocalStorageStrategy } from "../../common/localstorage.strategy";
import { IndexedDbStrategy } from "../../common/indexeddb.strategy";

export class MovieService {

  /**
   * MOCK
   */

  public movies: any  = [
    { id: 1, name: 'The Matrix', description: 'The matrix plot' },
    { id: 1, name: 'Tron', description: 'Tron plot' }
  ]

  private db = new DBHelper(new IndexedDbStrategy());

  constructor() {

  }

  getMovies(): MovieModel[] {
    return this.movies;
  }

  searchMovie(query: string) {

  }

  getFavorites() {

  }

  addToFavorites(data: MovieModel) {
    this.db.save(data);
  }
}