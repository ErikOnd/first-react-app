import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return <img className="img-style" src={this.props.imgSrc} alt={this.props.imgAlt} />
    }
}


export default ImageComponent;