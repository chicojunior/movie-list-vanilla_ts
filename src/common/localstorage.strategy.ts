import { Movie } from "../modules/movie/movie.model";

export class LocalStorageStrategy {

  _handler: Function;

  constructor() {}

  doAction() {
    this._handler();
  }

  _commit(data: Movie) {
    localStorage.setItem('favorites', JSON.stringify(data));
  }
}