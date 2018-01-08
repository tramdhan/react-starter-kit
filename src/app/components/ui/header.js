import React, { Component } from "react";
import { Avatar } from 'antd';

export default class Head extends Component {
    render() {
        return (
            <header className="header">
                <div className="header--inner">
                    <div className="logo">
                        <a href="#" className="logo--link">
                            <img className="logo--image" src='https://placehold.it/150x30' />
                            <span className="app-title">App Title</span>
                        </a>
                    </div>
                    <nav className="nav">
                        <a href="#" className="nav--link">
                            <Avatar icon="user" />
                        </a>
                    </nav>
                </div>
                <div className="subheader"><h2>Subheading</h2></div>
            </header>
        );
    }
}
