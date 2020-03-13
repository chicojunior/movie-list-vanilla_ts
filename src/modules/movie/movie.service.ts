import DBHelper from '../../common/db.helper';
import MovieModel from './movie.model';

/*  */
export default class MovieService {
  public movies: MovieModel[] = [
    { id: 1, name: 'The Matrix', description: 'The matrix plot' },
    { id: 1, name: 'Tron', description: 'Tron plot' },
  ]

  private db = DBHelper.getInstance();

  // constructor() {}

  getMovies(): MovieModel[] {
    return this.movies;
  }

  // searchMovie(query: string) {}

  // getFavorites() {}

  addToFavorites(data: MovieModel) {
    this.db.save(data);
  }
}
