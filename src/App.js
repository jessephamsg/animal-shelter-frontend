import React, {Component} from 'react';
import './App.css';

export class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: null,
      URL: 'http://localhost:4000'
    }
  }
  async getData () {
    const data = await fetch(this.state.URL);
    const JSONData = await data.json();
    this.setState ({
      data: JSONData
    })
  }
  componentDidMount () {
    this.getData();
  }
  render () {
    if(this.state.data === null) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className="App">
          <h1>{this.state.data[0].name}</h1>
        </div>
      );
    }
  }
}

export default App;
