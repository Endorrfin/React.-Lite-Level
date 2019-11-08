
import React from 'react';
import './App.css';

class Nav extends React.Component {
  render() {
    let nav = this.props.nav;
    return (
      <nav>
        {Object.keys(nav).map(elem => {
          return <li><a href="{nav[elem]}">{elem}</a></li>
        })}
      </nav>
    );
  }
}

export default Nav;
