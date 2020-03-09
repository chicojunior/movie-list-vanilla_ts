import { MovieModel } from '../model/movie.model';

export class MovieCard {
	template: string;

	constructor() {}

	public render(movie: MovieModel): string {
    return `
      <div>
        <p>${ movie.name }</p>
        <p>${ movie.description }</p>
      </div>
    `;
	}
}
