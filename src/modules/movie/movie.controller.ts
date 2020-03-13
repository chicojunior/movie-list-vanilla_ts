import MovieModel from './movie.model';
import MovieView from './movie.view';
import MovieService from './movie.service';
import MovieCard from './movie-card.view';

export default class MovieController {
  movies: MovieModel[] = [];

  movieService: MovieService;

  movieView: MovieView;

  movie: MovieModel = { id: 1, name: 'The Matrix', description: 'The matrix plot' };

  constructor(movieView: MovieView, movieService: MovieService) {
    this.movieService = movieService;
    this.movieView = movieView;
    this.movieView.controller = this;
  }

  addToFavorites(movie: MovieModel) {
    this.movieService.addToFavorites(movie);
  }

  getMovies() {
    const cards: HTMLElement[] = [];
    this.movies.forEach((movie) => {
      const card = new MovieCard()
      cards.push(card.render(movie));
    });
    return cards;
  }

  renderTemplate(): HTMLElement {
    return this.movieView.renderTemplate();
  }
}
