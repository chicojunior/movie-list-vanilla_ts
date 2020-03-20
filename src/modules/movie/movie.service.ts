/* eslint-disable import/extensions */

import { API_KEY } from '../../common/constants';
import DBHelper from '../../common/db.helper';
import MovieModel from './movie.model';
import MovieController from './movie.controller';

export default class MovieService {
  private db = DBHelper.getInstance();

  movies: MovieModel[] = [];

  headers = new Headers();
  url = `http://www.omdbapi.com/?apikey=${API_KEY}`
  controller: MovieController;

  getMovies(): MovieModel[] {
    return this.movies;
  }

  public setController(controller: MovieController, call?: Function) {
    this.controller = controller;
  }

  async searchMovie(query: string) {
    const response = await fetch(this.url.concat(`&s=${query}`));
    const data = await response.json();
    return data.Search;
  }

  addToFavorites(data: MovieModel) {
    this.db.save(data);
  }
}
