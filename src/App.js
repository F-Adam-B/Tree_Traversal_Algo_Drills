import React, { Component } from 'react';

class App extends Component {

  render() {

    let arr = [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
    ];

    //Linear Search

    function linearArray(array, value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
          return i;
        }
      }

      return -1;
    }

    console.log(linearArray(arr, 70));

    //Binary Search

    function binarySearch(array, value, start = 0, end = array.length) {
      let sortArray = array.sort();
      if (start > end)
        return -1;
      let index = Math.floor((start + end) / 2);
      let item = sortArray[index];
      if (item === value) {
        return index;
      } else if (item < value) {
        return binarySearch(sortArray, value, index + 1, end);
      } else if (item > value) {
        return binarySearch(sortArray, value, start, index - 1);
      }
    };

    console.log(binarySearch(arr, 89));

    return (<div>
      <div>
        <form className="linear">
          <p>Linear Search:
          </p>
          <input type="input"></input>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <form className="binary">
          <p>Binary Search:
          </p>
          <input type="input"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>);
  }
}

export default App;
