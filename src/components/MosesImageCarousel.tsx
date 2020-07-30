/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/Hello.tsx
import './MosesImageCarousel.css';

import * as React from 'react';
import SlideImage from '../Models/SlideImage.model';
import { time } from 'console';

export interface Props {
  title: string;
  numImages?: number;
  images: SlideImage[]
}

function ImageCarousel({ title, images, numImages = 1 }: Props) {

  let slideIndex = 1;
  showSlides(slideIndex, images);

  // Next/previous controls
  function plusSlides(n: any) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n: any) {
    showSlides(slideIndex = n);
  }

  function showSlides(n: any, images: SlideImage[] = []) {
    var i;
    var slides = images
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].visible = false;
    }
    slides[slideIndex - 1].visible = true;
    console.log(slides)
  }

  return (
    <div className="slideshow-element">
      <div className="slideshow-container">
        {
          images.map((ImageSlide: SlideImage, index) => (
            <div key={index} className="mySlides fade" >
              <div className="numbertext">{index} / 3</div>
              <img src={ImageSlide.url} alt="" />
              <div className="text">Caption Text</div>
            </div>
          ))
        }
        <span className="prev" onClick={() => { }}>&#10094;</span>
        <span className="next" onClick={() => { }}>&#10094;</span>
      </div>

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => { }}></span>
        <span className="dot" onClick={() => { }}></span>
        <span className="dot" onClick={() => { }}></span>
      </div>
    </div>



  );
}

export default ImageCarousel;

// helpers
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getImages(numImages: number) {
  return 0;
}