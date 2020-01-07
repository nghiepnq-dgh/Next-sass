import React, { Component } from 'react';
import Nav from './Nav';
import '../styles/Style.css'
import '../styles/sass/home.scss'
class Layout extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;