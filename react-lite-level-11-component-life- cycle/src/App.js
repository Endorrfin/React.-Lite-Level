import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
    }
  }

  // Позволяет pops вставить в state и манипулировать ими
  // static getDerivedStateFromProps(props, state) {
  //   return {text: state.text55};
  // }

  // after render
  // Важно: контекст стрелочной функции - сам компонент
  componentDidMount() {
    setTimeout(() => {
      this.setState({text: 'Componetn did mount' })
    }, 5000)
  }


  render() {
    return (
      <div>
      <p>{this.state.text}</p>
      </div>
    )
  }
}

export default App;