/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/Hello.tsx
import './MosesImageCarousel.css';

import * as React from 'react';
import SlideImage from '../Models/SlideImage.model';
import SlideDot from '../Models/SlideDot.model';
import { ImageListProps } from './ImagesList';

export interface Props {
  numImages?: number;
  images: SlideImage[]
  title: string
  ImageHandleChange: any,
}

export default class ImageCarousel extends React.Component<{
  images: SlideImage[],
  title: string
  ImageHandleChange: any
},
  ImageListProps> {

  dots: SlideDot[] = [];
  slideIndex = 1;

  constructor(props: ImageListProps) {

    super(props);
    this.state = {
      numImages: 1,
      images: [],
      title: "",
      ImageHandleChange: () => { }
    }
    this.DisplayingImages = []
  }

  componentDidMount() {
    // Start a loop going every 15 seconds to change picture (if we have pictures)
    setInterval(() => {
      if (this.DisplayingImages.length > 0)
        this.plusSlides(1)
    }, 15000);
  }
  componentWillReceiveProps(nextProps: ImageListProps) {
    this.setState({ images: nextProps.images })
    // Working only with active images
    this.DisplayingImages = nextProps.images.filter(i => i.active);
    this.updateSliding()
  }
  DisplayingImages: SlideImage[]
  updateSliding() {
    this.dots = this.DisplayingImages.map(() => {
      return new SlideDot(
        {
          active: false
        });
    })
    if (this.DisplayingImages.length > 0) {
      // Display slides initially
      this.showSlides(this.slideIndex);
    }
  }

  // Next/previous controls
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    var i;
    // Prevent index to pass amount of images (last index)
    if (n > this.DisplayingImages.length) {
      this.slideIndex = 1
    }

    if (n < 1) {
      this.slideIndex = this.DisplayingImages.length
    }

    for (i = 0; i < this.DisplayingImages.length; i++) {
      this.DisplayingImages[i].visible = false;
    }
    if (this.DisplayingImages.length > 0)
      this.DisplayingImages[this.slideIndex - 1].visible = true;

    // Reset dots
    this.dots.map(d => {
      d.active = false
      return d
    })

    // Make dot active for the one we have active using same index as image list 
    // since they should have same amount of elements
    this.dots[this.slideIndex - 1].active = true;

    this.setState({
      images: this.DisplayingImages,
    })
  }
  render() {
    return (
      <div className="slideshow-element">
        <h1>{this.props.title}</h1>
        <div className="slideshow-container">
          {
            this.DisplayingImages.map((ImageSlide: SlideImage, index) => (

              <div key={index}>
                {
                  ImageSlide.visible ?
                    <div key={index} className="mySlides fade">
                      <div className="numbertext">{(index + 1)} / {this.DisplayingImages.length}</div>
                      <img src={ImageSlide.url} alt="" />
                      <div className="text">{ImageSlide.text}</div>
                    </div>
                    : null
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
              <span title={SlideDots.annontationText} key={index} className={"dot " + (SlideDots.active ? 'active' : '')} onClick={() => { this.currentSlide(index + 1) }}></span>
            ))}
        </div>
        {
          this.DisplayingImages.length === 0 ? <div><h2>Select some images by clicking on them!</h2></div> : null
        }
      </div>
    )
  }


}
