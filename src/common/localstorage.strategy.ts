import { Movie } from "../modules/movie/movie.model";
import { IStrategyManager } from "./strategy-manager";

export class LocalStorageStrategy implements IStrategyManager {

  _handler: Function;

  constructor() {}

  doAction() {
    this._handler();
  }

  commit<Movie>(data: Movie) {
    localStorage.setItem('favorites', JSON.stringify(data));
  }
}