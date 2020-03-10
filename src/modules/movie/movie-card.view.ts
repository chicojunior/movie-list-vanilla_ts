import { MovieModel } from './movie.model';

export class MovieCard {
	template: string;

	constructor() {}

	public render(movie: MovieModel): string {
    return `
      <div class="card">
        <p>${ movie.name }</p>
        <p>${ movie.description }</p>
      </div>
    `;
	}
}
