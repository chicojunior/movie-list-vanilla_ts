import { DB_OPTION } from './constants';
import { Movie } from '../modules/movie/movie.model';

export class DBHelper {
  private dbOption = DB_OPTION.LOCAL_STORAGE;
  private dbName = 'moviedb';
  private storeName = 'favorites';
  private db: any;

	private _commit(data: Movie) {
		switch (this.dbOption) {
			case 'LOCAL_STORAGE':
				this.commitOnLocalStorage(data);
				break;
			case 'INDEXED_DB':
				this.commitOnIndexedDB(data);
				break;
			default:
				throw Error('NO DB OPTION SET');
		}
	}

	private commitOnLocalStorage(data: Movie) {
		localStorage.setItem('favorites', JSON.stringify(data));
	}

	private commitOnIndexedDB(data: Movie) {

    if (!('indexedDB' in window)) {
      console.warn('IndexedDB not supported')
      this.commitOnLocalStorage(data);
      return
    }

    async () => {
      this.createDB(this.dbName, this.storeName);

      const tx = this.db.transaction(this.storeName, 'readwrite')
      const store = await tx.objectStore(this.storeName)

      const val = data
      const key = 'Hello again'
      const value = await store.put(val, key)
      await tx.done
    }
  }

  private createDB(dbName: string, storeName: string) {
    async () => {
      this.db = await openDB(dbName, {
        upgrade(db: any, oldVersion, newVersion, transaction) {
          const store = db.createObjectStore(storeName)
        }
      })
    }
  }

	public save(data: Movie) {
		this._commit(data);
	}
}
