import { MovieModel } from '../model/movie.model';
import { MovieView } from '../view/movie.view';
import { MovieService } from '../service/movie.service';
import { MovieCard } from '../view/movie-card.view';

export class MovieController {

  private movieView: MovieView = new MovieView(this);
  private movies: MovieModel[] = [];

  constructor(private service: MovieService) {
    this.movieView.addToFavorite(this.addToFavorites);
    this.movieView.getMovies(this.getMovies);
  }

  addToFavorites(movies: MovieModel[]) {
    this.service.addToFavorites(movies)
  }

  getMovies() {
    this.movies = this.service.getMovies();
    let cards: string[] = [];
    this.movies.forEach(movie => {
      let card = new MovieCard()
      cards.push(card.render(movie));
    });
    return cards;
  }

  renderTemplate(): string {
    return this.movieView.renderTemplate();
  }
}
