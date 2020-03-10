import { Movie } from "../modules/movie/movie.model";

export class IndexedDbStrategy {

  public dbName = 'moviedb';
  public storeName = 'favorites';
  public db: any;

  constructor() {}


  _commit(data: Movie) {

    if (!('indexedDB' in window)) {
      console.warn('IndexedDB not supported');
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
}