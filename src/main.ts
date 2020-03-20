import './styles/main.css';

import MovieController from './modules/movie/movie.controller';
import DBHelper from './common/db.helper';
import { DBStrategyTypes } from './common/constants';

const app = document.getElementById('app');
const headerText = document.createElement('h1');
const dbHelper = DBHelper.getInstance();
const movieListController = new MovieController();

dbHelper.setStrategyType(DBStrategyTypes.INDEXED_DB);
headerText.textContent = 'BM - Movie Search';
app.appendChild(headerText);
app.appendChild(movieListController.renderTemplate());
