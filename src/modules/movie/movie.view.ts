import MovieController from './movie.controller';
import MovieModel from './movie.model';

export default class MovieView {
  public movies: HTMLElement[] = [];

  public controller: MovieController;

  public template: HTMLElement = document.createElement('div');

  public button: HTMLElement = document.createElement('button');

  public movie = { id: 1, name: 'Tron', description: 'Tron plot' };

  public renderTemplate(): HTMLElement {
    this.template.className = 'movie-list';
    this.button.textContent = 'Add Mock Movie';
    this.button.addEventListener('click', () => this.addToFavorites(this.movie));

    this.loadMovieList();
    this.template.appendChild(this.button);

    return this.template;
  }

  public setController(controller: MovieController, call?: Function) {
    this.controller = controller;
  }

  public addToFavorites(movie: MovieModel) {
    this.controller.addToFavorites(movie);
  }

  public getMovies(call?: Function) {
    this.movies = this.controller.getMovies();
  }

  loadMovieList(): void {
    this.movies.forEach((movieCard) => this.template.appendChild(movieCard));
  }
}
