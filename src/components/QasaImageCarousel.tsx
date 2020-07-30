// src/components/Hello.tsx
import './QasaImageCarousel.css';

import * as React from 'react';

export interface Props {
  title: string;
  numImages?: number;
}
  
function ImageCarousel({ title, numImages = 1 }: Props) {
  return (
    <div className="QasaImageCarouselContainer">
      <div className="images">
        { title }
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