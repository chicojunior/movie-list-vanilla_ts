import { Movie } from "../modules/movie/movie.model";

export class LocalStorageStrategy {

  _handler: Function;

  constructor(handler: Function) {
    this._handler = handler
  }

  doAction() {
    this._handler();
  }

  _commit(data: Movie) {
    localStorage.setItem('favorites', JSON.stringify(data));
  }
}