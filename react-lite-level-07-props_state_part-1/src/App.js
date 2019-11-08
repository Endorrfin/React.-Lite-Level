import React from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import './App.css';


class App extends React.Component {
  render() {
    let nav = this.props.nav;
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{this.props.title}</h1>
            <p>{this.props.hero}</p>
        </header>
        <Nav nav={nav} />
      </div>
    );
  }
}

export default App;
