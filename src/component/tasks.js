let arr = [[], [], [], [], [], [], []];
for (let i = 0; i <= 6; i++) {
  for (j = 0; j <= i; j++) {
    arr[i].push({ card: 1 });
  }
}
console.log(arr);

import React from 'react';
import ReactDOM from 'react-dom';

let columns = [
  [{ number: 1 }, { number: 2 }, { number: 3 }],
  [{ number: 4 }],
  [{}, {}],
];

const removedElm = columns[0].splice(0);

columns[2].push(...removedElm);

// const removedElm = columns[0].splice(0, 2);

// columns[1].push(removedElm);

//alert(JSON.stringify(columns[1]))

// const removedCol1Elem = col1.splice(0, 2);

// col2.push(...removedCol1Elem);

//logic
// splice

// col1 = [ {number: 3} ]
// col2 = [ {number: 4}, {number: 1}, {number: 2} ]

// ReactDOM.render(<List />, document.getElementById("container"));
