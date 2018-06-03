import React from 'react';

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
        return (
            <span className="col-double">
                <a ng-href={process.env.PUBLIC_URL + this.image.uri} href={this.image.uri}>
                    <img src={process.env.PUBLIC_URL + this.image.uri} alt={this.image.alt}></img>
                </a>
                <p className="caption ng-binding">{this.image.captionText}</p>
            </span>
        );
    }
}

export default ImageWithCaption;