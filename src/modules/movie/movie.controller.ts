import MovieModel from './movie.model';
import MovieView from './movie.view';
import MovieService from './movie.service';
import MovieCard from './movie-card.view';

export default class MovieController {
  movies: MovieModel[] = [];
  movieView: MovieView = new MovieView();
  movieService: MovieService = new MovieService();

  constructor() {
    this.setControllers();
    this.movieView.getMovies(this.getMovies);
  }

  setControllers() {
    this.movieView.controller = this;
    this.movieService.controller = this;
  }

  addToFavorites(movie: MovieModel) {
    this.movieService.addToFavorites(movie);
  }

  loadMoviesList(movieList: any) {
    this.movies = movieList;
  }

  getMovies() {
    this.movies = this.movieService.getMovies();

    return this.loadCards();
  }

  loadCards() {
    const cards: HTMLElement[] = [];

    this.movies.forEach((movie) => {
      const card = new MovieCard();
      cards.push(card.render(movie));
    });

    return cards;
  }

  updateMovieList() {
    this.loadCards();
  }

  async searchMovie(query: string) {
    this.movies = await this.movieService.searchMovie(query);
    this.updateMovieList();
  }

  renderTemplate(): HTMLElement {
    return this.movieView.renderTemplate();
  }
}
