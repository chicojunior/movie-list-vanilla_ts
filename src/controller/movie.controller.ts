import { MovieModel } from '../model/movie.model';
import { MovieView } from '../view/movie.view';
import { MovieService } from '../service/movie.service';

export class MovieController {
  constructor(private view: MovieView, private service: MovieService) {
    this.view.addToFavorite(this.addToFavorites);
  }

  addToFavorites(movies: MovieModel[]) {
    this.service.addToFavorites(movies)
  }
}
