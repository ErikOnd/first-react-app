import { Component } from "react";
import Badge from 'react-bootstrap/Button';

class ImageComponent extends Component {
    render() {
        return <div className="imgWithBadge">
            <img className={this.props.bgColor + ' img-style'} src={this.props.imgSrc} alt={this.props.imgAlt}>
            </img>
            <Badge className="bade-style" bg="secondary" as="Button">
                New
            </Badge>
        </div>
    }
}


export default ImageComponent;