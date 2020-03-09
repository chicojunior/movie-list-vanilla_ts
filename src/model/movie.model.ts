export interface Movie {
	id: string;
	name: string;
	description: string;
}

export class MovieModel {
	public id: string;
	public name: string;
	public description: string;

	constructor({ id, name, description }: Movie) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
