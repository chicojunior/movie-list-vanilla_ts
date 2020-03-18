
import DBHelper from '../../common/db.helper';
import MovieModel from './movie.model';
import { API_KEY } from '../../common/constants';
import MovieController from './movie.controller';

export default class MovieService {
  private db = DBHelper.getInstance();

  movies: MovieModel[] = [
    { id: 1, name: 'The Matrix', description: 'The matrix plot' },
    { id: 1, name: 'Tron', description: 'Tron plot' },
  ]

  headers = new Headers();
  url = `http://www.omdbapi.com/?apikey=${API_KEY}`
  controller: MovieController;

  getMovies(): MovieModel[] {
    return this.movies;
  }

  public setController(controller: MovieController, call?: Function) {
    this.controller = controller;
  }

  searchMovie(query: string) {
    fetch(this.url.concat(`&s=${query}`))
      .then((response) => response.json())
      .then((data) => {
        this.controller.loadMoviesList(data.Search);
      });
  }

  // getFavorites() {}

  addToFavorites(data: MovieModel) {
    this.db.save(data);
  }
}
