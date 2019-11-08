import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello',
      text2: 555
    }

    // <Байндим методы, чтоб иметь возможность обращаться к контексту компонента
    this.showText = this.showText.bind(this);
    this.showText2 = this.showText2.bind(this);
  }

  // Прописываем метод showText
  showText() {
    console.log('work');
    console.log(this);
    this.setState({text : 'hi'});
  }

  showText2(event){
    this.setState({text2 : event.target.value});
    console.log(event.target.value);
  }

  // Попробуем прописать метод, чтоб получать текст с input
  move(event) {
    console.log(event.target.textContent);
  }

  render() {
    return (
      <div>
      {/* // Особенность state в том, что меняя их состояние вызывается автоматически render страницы */}
        <button onClick={this.showText}>Push1</button>
        <input onInput={this.showText2} />
        <div onMouseMove={this.move}>lorem</div>
        <p>{this.state.text} </p>
        <p>{this.state.text2}</p>
      </div>
    )
  }
}

export default App;