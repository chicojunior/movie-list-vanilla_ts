const app = () => {
  const element = document.createElement('div');
  const headerText = document.createElement('h1');
  
  element.id = 'app';
  headerText.innerText = 'BM - Movie Search';
  element.appendChild(headerText);

  return element;
}

document.body.appendChild(app());