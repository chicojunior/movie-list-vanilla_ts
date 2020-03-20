import MovieController from './movie.controller';
import MovieModel from './movie.model';

export default class MovieView {
  public movies: HTMLElement[] = [];
  public controller: MovieController;
  public template: HTMLElement = document.createElement('div');
  public button: HTMLElement = document.createElement('button');
  public searchButton: HTMLElement = document.createElement('button');
  // public movie = { id: 1, name: 'Tron', description: 'Tron plot' };

  public renderTemplate(): HTMLElement {
    this.template.className = 'movie-list';

    this.loadMovieList();

    this.button.textContent = 'Add Mock Movie';
    this.button.addEventListener('click', () => this.addToFavorites({} as MovieModel));
    this.template.appendChild(this.button);

    this.searchButton.textContent = 'Search Movie';
    this.searchButton.addEventListener('click', () => this.searchMovie());
    this.template.appendChild(this.searchButton);


    return this.template;
  }

  public addToFavorites(movie: MovieModel) {
    this.controller.addToFavorites(movie);
  }

  public getMovies(call?: Function) {
    this.movies = this.controller.getMovies();
  }

  public searchMovie(call?: Function) {
    this.controller.searchMovie('matrix');
  }

  public updateMovieList(call?: Function) {
    this.controller.updateMovieList();
  }

  loadMovieList(): void {
    this.movies.forEach((movieCard) => this.template.appendChild(movieCard));
  }
}
