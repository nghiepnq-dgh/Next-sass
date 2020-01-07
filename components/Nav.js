import React, { Component } from 'react';
import Link from 'next/link'

class Nav extends Component {
    render() {
        return (
            <div>
                <Link href='/'>
                    <a className="home"> Home </a>
                </Link>
                <Link href='/about'>
                    <a className="about"> About </a>
                </Link>
            </div>
        );
    }
}

export default Nav;