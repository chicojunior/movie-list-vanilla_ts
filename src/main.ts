import './styles/main.css'

import { MovieController } from './modules/movie/movie.controller';
import { MovieService } from './modules/movie/movie.service';

const _app = document.getElementById('app');
const headerText = document.createElement('h1');
const movieList = document.createElement('div');
const movieListController = new MovieController(new MovieService());

movieListController.getMovies();
movieList.innerHTML = movieListController.renderTemplate();
headerText.textContent = 'BM - Movie Search';

_app.appendChild(headerText);
_app.appendChild(movieList);
