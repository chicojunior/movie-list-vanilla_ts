
import { Movie } from '../modules/movie/movie.model';
import { IStrategyManager } from './strategy-manager';

export class DBHelper {


  constructor(private strategy: IStrategyManager) {}

	public save(data: Movie) {
    this.strategy.commit<Movie>(data);
  }


}
