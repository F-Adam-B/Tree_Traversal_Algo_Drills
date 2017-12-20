import React, { Component } from 'react';

class App extends Component {

  linearArray(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        console.log('This is a valid value');
        return i;
      }
    }

    alert('Please Enter A Valid Number!');
    return -1;
  }

  onSubmit(e) {
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
    e.preventDefault();
    let lin = parseInt(this.input.value, 10);
    this.linearArray(arr, lin);
    this.input.value = '';
  };

  binarySearch(array, value, start = 0, end = array.length) {
    let sortArray = array.sort();
    if (start > end)
      return -1;
    let index = Math.floor((start + end) / 2);
    let item = sortArray[index];
    if (item === value) {
      console.log('your value is at index: ', index);
      return index;
    } else if (item < value) {
      return this.binarySearch(sortArray, value, index + 1, end);
    } else if (item > value) {
      return this.binarySearch(sortArray, value, start, index - 1);
    }
  };

  onSubmit2(e) {
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
    e.preventDefault();
    let bin = parseInt(this.input.value, 10);
    this.binarySearch(arr, bin);
    this.input.value = '';
  };

  render() {

    return (<div>
      <div>
        <form>
          <input ref={input => this.input = input} type="text"></input>
          <br/> Linear Search:
          <button type="submit" onClick={e => this.onSubmit(e)}>Submit</button>
          <br/> Binary Search:
          <button type="submit" onClick={e => this.onSubmit2(e)}>Submit</button>
        </form>
      </div>

    </div>);
  }
}

export default App;
