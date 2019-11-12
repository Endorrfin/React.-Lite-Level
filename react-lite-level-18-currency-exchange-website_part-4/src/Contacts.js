import React from 'react';
import './App.css';


class Contacts extends React.Component {
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
      Contacts with us
      </div>
    );
  }
}

export default Contacts;