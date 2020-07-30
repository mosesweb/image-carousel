import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import QasaImageCarousel from './components/QasaImageCarousel';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <QasaImageCarousel title="Image Carousel for Qasa" numImages={1} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
