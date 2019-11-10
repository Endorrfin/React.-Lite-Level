import React from 'react';
import './App.css';

/**
 * JSX - это некая смесь javaScript и xml технологий, которая позволяет создавать 
 * разметку UI дизайна без обращения к компонентам типа create element
 * JSX - вырос на стандарте XML - или - некоторые правила XML перенесены в JSX
 * JSX позволяет нам смешивать HTML & javaScript code -> даже вычислять javaScript внутри HTML
 */


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
      <div className="ty">
      <h1>{this.state.go}</h1>
      <h2>{3 + 4}</h2>
      <div>Math.random()</div>
      <div>{Math.random()}</div>
      <div>{this.test()}</div>
      <div>{a}</div>
      <div {...b}></div>
      <ul>
        {c.map(elem => {
          return <li key={elem}>{elem}</li>
        })}
      </ul>
      <hr />
      <p>{true}</p>
      <hr />

      <hr />
      <p>{false}</p>
      <hr />
      <input defaultValue="Hello"></input>
      <input defaultValue="222" />
      <p>{'&#38'}</p>
      <p>&#38;</p>
      </div>
    );
  }
}

export default App;