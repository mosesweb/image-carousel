import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MosesImageCarousel from './components/MosesImageCarousel';
import SlideImage from './Models/SlideImage.model';

const images: SlideImage[] = []
images.push(new SlideImage({url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/three-geisha-walking-between-buildings-1325837-1-1024x683.jpg", visible: false, text: "Geisha"}))
images.push(new SlideImage({url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/japanese-lucky-coin-cat-932261-1-1024x681.jpg", visible: false, text: "Money cat!"}))
images.push(new SlideImage({url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/low-angle-photo-of-lighted-signage-2067048-1-1024x683.jpg", visible: false, text: "Shibuya"}))

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MosesImageCarousel title="Image Carousel for Qasa" images={images} numImages={1} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
