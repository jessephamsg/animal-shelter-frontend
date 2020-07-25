import React, {Component} from 'react';
import './App.css';
import AnimalCard from './components/AnimalCard.js';

const URL = process.env.REACT_APP_BE_URL || 'http://localhost:4000';

export class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: null,
      URL: URL,
      viewData: null
    }
    this.viewDetails = this.viewDetails.bind(this);
  }
  async getData () {
    const data = await fetch(this.state.URL);
    const JSONData = await data.json();
    console.log(JSONData);
    this.setState ({
      data: JSONData,
      viewData: JSONData
    })
  }
  async viewDetails (index) {
    const data = await fetch(`${this.state.URL}/${index}`);
    const JSONData = await data.json();
    this.setState({
      viewDetails: JSONData
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
          <AnimalCard 
            data={this.state.viewData[0]} 
            viewDetails={this.viewDetails} />
        </div>
      );
    }
  }
}

export default App;
