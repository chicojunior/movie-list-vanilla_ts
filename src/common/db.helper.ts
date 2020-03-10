
import { Movie } from '../modules/movie/movie.model';
import { LocalStorageStrategy } from './localstorage.strategy';
import { IndexedDbStrategy } from './indexeddb.strategy';

export class DBHelper {

  public strategy: any;
  public localstorageStrategy = new LocalStorageStrategy();
  public indexeddbStrategy = new IndexedDbStrategy();

  constructor() {
    this.setDBStrategy(this.localstorageStrategy);
  }

	private _commit(data: Movie) {
    this.strategy._commit(data);
	}

  private setDBStrategy(strategy: any) {
    this.strategy = strategy;
  }

	public save(data: Movie) {
		this._commit(data);
  }


}
