/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import ImagesList from './components/ImagesList';
import MosesImageCarousel from './components/MosesImageCarousel';
import SlideImage from './Models/SlideImage.model';

type Props = {
};
export default class App extends React.Component<Props> {
  state = { inputValue: '', images: [], activeImages: [] }
  images: SlideImage[] = []

  handleChange = (e: any) => {
    this.setState({ inputValue: e.target.value })
  }

  ImageHandleChange = (e: SlideImage[]) => {
    this.setState({
      images: e,
      activeImages: e.filter(i => i.active)
    })
  }

  constructor(props: Props) {
    super(props);

    // Set some data already
    this.images.push(new SlideImage({ url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/three-geisha-walking-between-buildings-1325837-1-1024x683.jpg", visible: false, text: "Geisha", active: true }))
    this.images.push(new SlideImage({ url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/japanese-lucky-coin-cat-932261-1-1024x681.jpg", visible: false, text: "Money cat!", active: true }))
    this.images.push(new SlideImage({ url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/low-angle-photo-of-lighted-signage-2067048-1-1024x683.jpg", visible: false, text: "Shibuya", active: true }))

    this.images.push(new SlideImage({ url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/brian-garcia-13VwsTt9pAw-unsplash-1024x683.jpg", visible: false, text: "Flower", active: false }))
    this.images.push(new SlideImage({ url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/guillermo-ferla-Oze6U2m1oYU-unsplash-1024x680.jpg", visible: false, text: "Space", active: false }))
    this.images.push(new SlideImage({ url: "https://info.japanesehelp.com/wp-content/uploads/2020/07/andre-benz-JnB8Gio4GZo-unsplash-1024x683.jpg", visible: false, text: "Subway in New Work", active: false }))
  }
  componentDidMount() {
    this.setState({
      images: this.images,
      activeImages: this.images.filter(i => i.active)
    })
  }


  render() {
    return (
      <div className="App">
        <MosesImageCarousel images={this.state.images}
          ImageHandleChange={this.ImageHandleChange.bind(this)}
        />
        <ImagesList images={this.state.images}
          ImageHandleChange={this.ImageHandleChange.bind(this)}
         
        />
      </div>
    );
  }
}


