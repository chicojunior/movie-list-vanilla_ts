import MovieController from './movie.controller';
import MovieModel from './movie.model';

export default class MovieView {
  public movies: HTMLElement[] = [];

  public template: HTMLElement = document.createElement('div');

  public button: HTMLElement = document.createElement('button');

  public movie = { id: 1, name: 'Tron', description: 'Tron plot' };

  public controller: MovieController;

  constructor(private movieController?: MovieController) {
    this.controller = movieController;
    this.getMovies();
  }

  public renderTemplate(): HTMLElement {
    this.template.className = 'movie-list';
    this.button.textContent = 'Add Mock Movie';
    this.button.addEventListener('click', () => this.addToFavorites(this.movie));
    this.template.appendChild(this.button);

    return this.template;
  }

  public addToFavorites(movie: MovieModel) {
    this.controller.addToFavorites(movie);
  }

  public getMovies() {
    debugger
    this.movies = this.controller.getMovies();
    this.movies.forEach((movieCard) => this.template.appendChild(movieCard));
  }
}
