// создадим объект a
let a = {
  a1: 'object a',
  // a2: function() {
  //   console.log('this is a method a');
  //   return true;
  // }
  _a3: 5,
  a2: function() {
    console.log(this.a1); // this - это всегда ссылка на объект в данном контексте
    return true;
  },

  // работа чере get и set
  set a3(x) {
    this._a3 = x;
  }

}


// создадим объект b
let b = {
  a1: 'bbbbbbb',
  b1: 'object b',
  // a2: function() {
  //   console.log('this is a method b!!!');
  //   return true;
  // }
}

/**
 * Если создан объект, в объекте написано много полезных свойств и методов и необходимо наследоваться и расширять его то...
 * 1. Это можно делать через классы
 * 2. Можно делать это через прототипы
 */

// b.__proto__ = a; // такая запись устарела, актуальная Object.setPrototypeOf(obj, prototype)
Object.setPrototypeOf(b, a); //прототипом объекта b выступает объект a | b унаследовал от объекта a | b потомок a

console.log(a); // вызываем, как свойство
console.log(b);
// console.log(b.b1); // object b - это свойство есть в обеъкте b
// console.log(b.a1); // object a - это свойство тоже появилось в объекте a
console.log(b.a2()); // bbbbbbb-> вызываем, как метод
console.log(b.a1);
b.a1 = 55;
console.log(b.a1);
console.log('-----------------------------------');
a.a3 = 77;
console.log(a); // {a1: "object a", _a3: 77, a2: ƒ}
b.a3 = 88;
console.log(b) // {a1: 55, b1: "object b", _a3: 88}


console.log(b.a1); // 55
console.log(a.a1); // object a
// console.log(b.__proto___.a1);

/**
 * из-за того, что прототипом объекта b выступил объект a - все свойства объекта a стали доступны для объекта b
 */