import MovieModel from './movie.model';
import MovieView from './movie.view';
import MovieService from './movie.service';
import MovieCard from './movie-card.view';

export default class MovieController {
  movies: MovieModel[] = [];
  movieView: MovieView;
  movieService: MovieService;
  movie: MovieModel = { id: 1, name: 'The Matrix', description: 'The matrix plot' };


  constructor(movieView: MovieView, movieService: MovieService) {
    this.movieView = movieView;
    this.movieService = movieService;
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
    console.log(this.movies);
  }

  getMovies() {
    this.movies = this.movieService.getMovies();
    const cards: HTMLElement[] = [];
    this.movies.forEach((movie) => {
      const card = new MovieCard();
      cards.push(card.render(movie));
    });
    return cards;
  }

  searchMovie(query: string) {
    this.movieService.searchMovie(query);
  }

  renderTemplate(): HTMLElement {
    return this.movieView.renderTemplate();
  }
}
