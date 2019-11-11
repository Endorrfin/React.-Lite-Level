import React from 'react';
import './App.css';


class Other extends React.Component {
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
      Error 404
      </div>
    );
  }
}

export default Other;