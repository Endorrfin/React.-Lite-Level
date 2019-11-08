import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      text2: 555,
      first_name: '',
      age: 0
    }
  }

  myInput = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({[event.target.name] : event.target.value});
  }

  submitForm = (event) => {
    event.preventDefault();
  }


  render() {
    let a = '';
    if(this.state.text) {
      a = <p>Enter your text {this.state.text}</p>
    } else {
      a = ''
    }
    return (
      <div>
      <form onSubmit={this.submitForm}>
        <input onChange={this.myInput} name="text" />
        <input onChange={this.myInput} type="number" name="age" />
        {a}
        <input type="submit" />
        <p>Age: {this.state.age}</p>
      </form>
      </div>
    )
  }
}

export default App;