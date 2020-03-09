import { MovieController } from "./controller/movie.controller";
import { MovieView } from "./view/movie.view";
import { MovieService } from "./service/movie.service";

const app = () => {
  const controller = new MovieController(new MovieView(), new MovieService());
  const element = document.createElement('div');
  const headerText = document.createElement('h1');

  element.id = 'app';
  headerText.innerText = 'BM - Movie Search';
  element.appendChild(headerText);

  return element;
}

document.body.appendChild(app());