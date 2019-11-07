// шаблон
class Header {

  constructor(h1, h2) {
    this.h1 = h1;
    this.h2 = h2;
  }

  // add method
  render(x) { // передаем какую-то переменную х, как переменную на html страницу = <div id="header"></div>
    let out = '';
    out += `<h1>${this.h1}</h1>`;
    out += `<h2>${this.h2}</h2>`;

    document.getElementById(x).innerHTML = out;
  }

  static hello(a) {
    console.log('work static method ' + a);
  }
}


// create new object
const header = new Header('Hello', 'My site');
// добавляем лозунг (расширяем наш объект добавив новое свойство) и лозунг появиться в header-out... НО
// если мы работаем с точки зрения ООП, то данное свойство (лозунг) не будет в следующем объекте порожденным из класса header
// Наша задача с точки зрения ООП расширять (модифицировать) наш шаблон - class Header
// Для того, чтобы модифицировать шаблон на основе существующего - применяется наследование
// header.hero = 'Go go go';
// теперь к этому объекту применяем следующее
header.render('header-out') // передаем id header-out с html страницы
console.log(header);


// Работа с наследованием
// В какой-то момент мы понимает, что нам нужен header более сложной конструкции, содержащий дополнительные эелементы, которые изначально не предусматривал шаблон class header


// Модифицируем наш шаблон (расширяем его возможности)
// для этогого создаем новый класс на основании существующего и новый будет наследовать все свойства первого// 
// class Header2 будет расширять возможности classa Header! 
// ВАЖНО ПОНЯТЬ: когда делаем наследование (extends), у нас остаются все возможности класса родителя Header + добавляются либо изменяются некоторые свойства нового класса Header2.
class Header2 extends Header {
  constructor(h1, h2, hero) { // h1 & h2 from Header, and hero is new properties Header2
    super(h1, h2);
    this._hero = hero;
  }

  // гетеры и сетеры
  get hero() { // позволяет получить
    return this._hero;
  }
  set hero(c) { // позволяет установить
    this._hero = c;
  } 
}

// create new object
const header2 = new Header2('new Hello', 'new site', 'go-go-go-go-go');
// header2._hero = 3.145; - BAD!!!!!
header2.hero = 'Google';
console.log(header2.hero);

header2.render('header-out');

console.log(header2)
Header.hello('hi');