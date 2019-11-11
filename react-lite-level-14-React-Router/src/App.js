import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Other from './Other';

// npm install --save react-router-dom

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "go" : "goooo"
    }
  }

  test() {
    return 111;
  }


  render() {
    let a = 44;
    let b = {name: 'Ivan', lastname: 'Ivanov'};
    let c = ['hello', 'ivanov', 'ivan', 'ivanovich'];
    return (
      <Router>
      <div className="ty">
      <ul>
        <li><a href="/">Main page</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>
{/* Определяем внутри Routera область, где у нас будет подгружаться вся необходимая часть сайта */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contacts" component={Contacts} />
      {/* Если мы укажем Route, у которого не будет path, то он будет работать для всех не совпавших адресов */}
      {/* <Route exact path="/contacts" component={Contacts} /> */}
      <Route component={Other} />
    </Switch>
      </div>
      </Router>
    );
  }
}

export default App;