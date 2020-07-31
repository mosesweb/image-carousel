import React from "react";
import SlideImage from "../Models/SlideImage.model";
import './ImagesList.css';

export interface ImageListProps {
    numImages?: number;
    images: SlideImage[]
    title: string
    ImageHandleChange: any
}

export default class ImagesList extends React.Component<{
    images: SlideImage[], ImageHandleChange: any
}, ImageListProps> {

    changeStatus(img: SlideImage) {
        img.active = !img.active;
        this.setState({ 
            images: this.props.images,
         })
        this.props.ImageHandleChange(this.props.images);
    }

    render() {
        return (
            <div className="row">
                <div className="column">
                    {
                        this.props.images.map((i, index) =>
                            <img key={index} className={i.active ? "active" : "inactive"} onClick={(e) => { e.preventDefault(); this.changeStatus(i) }} alt="" src={i.url} />
                        )
                    }</div>
            </div>

        )
    }
}