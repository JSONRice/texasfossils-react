import React from 'react';
import getImage from './imgMap';

class ImageWithCaption extends React.Component {

    constructor(props) {
        super(props);
        this.image =
            {
                captionText: this.props.captionText || 'Default',
                uri: this.props.uri || '#',
                alt: this.props.alt || 'Alternative'
            };
    }

    render() {
        const IMAGE = getImage(this.image.uri);
        return (
            <span className="col-double">
                <a href={this.image.uri}>
                    <img src={IMAGE} alt={this.image.alt}></img>
                </a>
                <p className="caption ng-binding">{this.image.captionText}</p>
            </span>
        );
    }
}

export default ImageWithCaption;