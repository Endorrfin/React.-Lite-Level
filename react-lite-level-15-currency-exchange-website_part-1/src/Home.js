import React from 'react';
import './App.css';


class Home extends React.Component {
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
      <div className="ty">
      It's a home my home page
      </div>
    );
  }
}

export default Home;