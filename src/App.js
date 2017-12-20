import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
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
  </div>
  );
  }
}

export default App;
