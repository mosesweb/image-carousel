/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/Hello.tsx
import './MosesImageCarousel.css';

import * as React from 'react';
import SlideImage from '../Models/SlideImage.model';
import { time } from 'console';
import SlideDot from '../Models/SlideDot.model';
import { domainToASCII } from 'url';

export interface Props {
  numImages?: number;
  images: SlideImage[]
  title: string
}

export default class ImageCarousel extends React.Component<Props, object> {
  dots: SlideDot[] = [];
  slideIndex = 1;
  constructor(props: Props) {
    super(props);
    this.state = {
      slideIndex: 1,
      imgs: this.props.images
    }
    console.log("test!" + this.props.title)
    this.dots = this.props.images.map((SlideImage: SlideImage) => {
      return new SlideDot(
        {
          active: false
        });
    })

    this.showSlides(
      this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n: any) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    var i;
    // Prevent index to pass amount of images (last index)
    if (n > this.props.images.length) {
      this.slideIndex = 1
    }

    if (n < 1) {
      this.slideIndex = this.props.images.length
    }

    for (i = 0; i < this.props.images.length; i++) {
      this.props.images[i].visible = false;
    }

    this.props.images[this.slideIndex - 1].visible = true;

    // Reset dots
    this.dots.map(d => {
      d.active = false
      return d
    })

    // Make active for the one we have active using same index as image list 
    // since they should have same amount of elements
    this.dots[this.slideIndex - 1].active = true;

    this.setState({ imgs: this.props.images })
  }
  render() {
    const { numImages, images, title } = this.props;
    return (
      <div className="slideshow-element">
        <div className="slideshow-container">
          {
            this.props.images.map((ImageSlide: SlideImage, index) => (

              <div key={index}>
                {
                  ImageSlide.visible ?
                    <div key={index} className="mySlides fade">
                      <div className="numbertext">{(index + 1)} / 3</div>
                      <img src={ImageSlide.url} alt="" />
                      <div className="text">{ImageSlide.text}</div>
                    </div>
                    : ""
                }

              </div>
            ))
          }
          <span className="prev" onClick={() => { this.plusSlides(-1) }}>&#10094;</span>
          <span className="next" onClick={() => { this.plusSlides(1) }}>&#x276F;</span>
        </div>
        <div style={{ textAlign: "center" }}>
          {
            this.dots.map((SlideDots: SlideDot, index) => (
              <span key={index} className={"dot " + (SlideDots.active ? 'active' : '')} onClick={() => { this.currentSlide(index + 1) }}></span>
            ))}
        </div>
      </div>
    )
  }


}
