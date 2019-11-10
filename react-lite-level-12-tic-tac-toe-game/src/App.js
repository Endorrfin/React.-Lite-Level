import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0 // для последующей реализации чередования x & 0
    }
    // Прописываем возможные победные комбинации
    this.winnerLine = [
      // по горизонтали
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // по вертикали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // по 2-м диагоналям
      [0, 4, 8],
      [2, 4, 6] 
    ]

  }

   // Создаем метод для проверки на выиграш
   isWinner = () => {
     // проверяем на предметной победной комбинации
     let s = (this.state.count % 2 === 0) ? 'x' : '0';
     for (let i = 0; i < 8; i++) {
       let line = this.winnerLine[i];
       if(this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
          alert(s + ' is winner');
          setTimeout(() => {
            this.setState({ squares: Array(9).fill(null) });
            this.setState({ count: 0 });
          }, 3000)
        }
     }
   }

  clickHandler = event => {
    console.log(1);
    // data = номер квадрата по которому кликнули
    let data = event.target.getAttribute('data');
    // вводим промежуточную переменную, чтоб не писать каждый раз массив
    let currentSquares = this.state.squares;
    // currentSquares - это состояние нашего игрового поля
    console.log(currentSquares);

    // Перед тем, как поставить знак делаем проверку стоит ли что-то уже в ячейке
    if(currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'x' : '0';
      // Реализуем состояние увеличения счетчика при клике на ячейку
      this.setState({count : this.state.count + 1});
      // currentSquares - это массив, поэтому возвращаем его обратно в state
      this.setState({ squares : currentSquares });
  } else {
      alert('Ячейка уже содержит значение!!!')
  }

  this.isWinner();
  }


  render() {
    return (
      <div className="tic-tac-toe">
      <div className="ttt-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
      <div className="ttt-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
      </div>
    );
  }
}

export default App;