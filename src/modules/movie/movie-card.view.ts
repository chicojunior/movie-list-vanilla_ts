import MovieModel from './movie.model';

export default class MovieCard {
  div: HTMLElement = document.createElement('div');
  movieName: HTMLElement = document.createElement('p');
  movieDescription: HTMLElement = document.createElement('p');

  public render(movie: MovieModel): HTMLElement {
    this.div.className = 'card';
    this.movieName.textContent = movie.name;
    this.movieDescription.textContent = movie.description;
    this.div.appendChild(this.movieName);
    this.div.appendChild(this.movieDescription);
    return this.div;
  }
}
