import React from 'react';
//import ReactDOM from 'react-dom';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.links = [
            {title: 'About Me', uri: '#'},
            {title: 'Discoveries', uri: '#'},
            {title: 'Gallery', uri: '#'},
            {title: 'Services', uri: '#'},
            {title: 'Testimonials', uri: '#'},
        ];
    }

    /**
     * Generate markup for the navbar
     *
     * @param buildOffset to start building the list
     * @returns {Array}
     */
    buildLinks = (buildOffset) => {
        const linkMarkup = this.links.map((tuple) => {
            let buildOffsetClass = "col-" + buildOffset;
            let buildOffsetKey = "header-link-key-" + buildOffset;
            buildOffset++;
            return (
                <div key={buildOffsetKey} className={buildOffsetClass}>
                    <a href={tuple.uri} className="navLinks">{tuple.title}</a>
                </div>
            );
        });

        return linkMarkup;
    };

    render() {
        // Start at offset of 2 since first column will be the logo.
        const links = this.buildLinks(2);

        return (
            <nav className="container">
                <div className="col-double">
                    <div className="logo"></div>
                </div>
                {links}
            </nav>
        );
    }
}

export default Header;