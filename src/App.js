import React, {Component} from 'react';
import './App.css';
import AnimalCard from './components/AnimalCard.js';
import Header from './components/Header';
import AddForm from './components/AddForm';
import apiHandlers from './utils/apiHandlers';

export class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: null,
      URL: URL,
      viewData: null,
      viewAddForm: false
    }
    this.viewDetails = this.viewDetails.bind(this);
    this.editDetails = this.editDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.launchAddForm = this.launchAddForm.bind(this);
  }
  async getData () {
    const data = await apiHandlers.handleGeneralGetRequests();
    this.setState ({
      data: data,
      viewData: data
    })
  }
  async viewDetails (index) {
    const data = await apiHandlers.handleSpecificGetRequests(index);
    this.setState({
      viewData: data
    })
  }
  handleChange (e) {
    const index = e.target.id.split('-')[0];
    const element = e.target.id.split('-')[1];
    const checkBoxElements = ['isSterilised', 'isMicrochipped', 'isVaccinated', 'isHDBApproved'];
    const content = e.target.value;
    let dataArr = [...this.state.data];
    for (const animal of dataArr) {
      if(animal._id === index && checkBoxElements.includes(element)===false) {
        animal[element] = content
      } else if (checkBoxElements.includes(element)){
        animal[element] = !content
      }
    }
    this.setState({
      data: dataArr,
      viewData: dataArr
    })
  }
  async editDetails (e) {
    const index = e.target.id.split('-')[0];
    const payload = this.state.data;
    await apiHandlers.handleEditRequest(index, payload)
    await this.getData();
  }
  async handleSubmit (newAnimal) {
    this.setState({
      data: [newAnimal, ...this.state.data],
      viewAddForm: false
    })
    await apiHandlers.handleCreateRequest(newAnimal)
    this.getData();
  }
  async handleDelete (e) {
    const index = e.target.id.split('-')[0];
    await apiHandlers.handleDeleteRequest(index);
    this.getData();
  }
  launchAddForm () {
    if(!this.state.viewAddForm) {
      this.setState({
        viewAddForm: true
      })
    } else {
      this.setState({
        viewAddForm: false
      })
    }
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
          <Header />
          <button onClick={this.launchAddForm}>Add Animal</button>
          {(this.state.viewAddForm) ? 
            <AddForm handleSubmit={this.handleSubmit}/> : 
            <div></div>
          }
          <div className='all-animal-cards'>
            {(this.state.data).map(animal => {
              return (
                <AnimalCard 
                  data={animal} 
                  viewDetails={this.viewDetails} 
                  handleChange= {this.handleChange}
                  editDetails = {this.editDetails}
                  handleDelete = {this.handleDelete}
                  />
              )
            })}
          </div>
        </div>
      );
    }
  }
}

export default App;
