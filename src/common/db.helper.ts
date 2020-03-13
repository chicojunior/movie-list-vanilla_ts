
import { Movie } from '../modules/movie/movie.model';
import { IStrategyManager } from './strategy-manager';
import { DBStrategyTypes } from './db-strategy-types';
import { LocalStorageStrategy } from './localstorage.strategy';
import { IndexedDbStrategy } from './indexeddb.strategy';

export default class DBHelper {
  private static instance: DBHelper;

  private strategy: IStrategyManager;

  private strategyType: DBStrategyTypes;

  static getInstance(): DBHelper {
    if (!this.instance) {
      this.instance = new DBHelper();
    }
    return this.instance;
  }

  private constructor() {
    this.setStrategy();
  }

  private setStrategy(): void {
    switch (this.strategyType) {
      case 'INDEXED_DB':
        this.strategy = new IndexedDbStrategy();
        break;
      default:
        this.strategy = new LocalStorageStrategy();
        break;
    }
  }

  public setStrategyType(strategyType: DBStrategyTypes): void {
    this.strategyType = strategyType;
    this.setStrategy();
  }

  public save(data: Movie) {
    this.strategy.commit<Movie>(data);
  }
}
