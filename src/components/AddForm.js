import React, {Component} from 'react';

export class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: 'Dog',
            dob: '',
            description: '',
            isSterilised: false,
            isMicrochipped: false,
            isVaccinated: false,
            isHDBApproved: false,
            gender: 'Male',
            img: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit () {
        const newAnimal = {
            name: this.state.name,
            type: this.state.type,
            dob: this.state.dob,
            description: this.state.description,
            isSterilised: this.state.isSterilised,
            isMicrochipped: this.state.isMicrochipped,
            isVaccinated: this.state.isVaccinated,
            isHDBApproved: this.state.isHDBApproved,
            gender: this.state.gender,
            img: this.state.img,
        }
        this.props.handleSubmit(newAnimal)
    }
    render() {
        return (
            <div className='add-form-modal'>
            <div className='add-form-modal-content'>
                <form>
                    <label htmlFor='name'>Name</label><br/>
                    <input id='name' type='text' value={this.state.name} onChange={this.handleChange}/><br/>
                    <label htmlFor='type'>Type</label><br/>
                    <select id='type' value={this.state.type} onChange={this.handleChange}>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Others</option>
                    </select><br/>
                    <label htmlFor='gender'>Gender</label><br/>
                    <select id='gender' value={this.state.gender} onChange={this.handleChange}>
                        <option>Male</option>
                        <option>Female</option>
                    </select><br/>
                    <label htmlFor='img'>Image</label><br/>
                    <input id='img' type='text' value={this.state.img} onChange={this.handleChange}/><br/>
                    <label htmlFor='dob'>Birth Year</label><br/>
                    <input id='dob' type='text' value={this.state.dob} onChange={this.handleChange}/><br/>
                    <label htmlFor='description'>Description</label><br/>
                    <input id='description' type='text' value={this.state.description} onChange={this.handleChange}/><br/>
                    <label htmlFor='isSterilised'>Sterilised</label><br/>
                    <input id='isSterilised' type='checkbox' value={this.state.isSterilised} onChange={this.handleChange}/><br/>
                    <label htmlFor='isMicrochipped'>Microchipped</label><br/>
                    <input id='isMicrochipped' type='checkbox' value={this.state.isMicrochipped} onChange={this.handleChange}/><br/>
                    <label htmlFor='isVaccinated'>Vaccinated</label><br/>
                    <input id='isVaccinated' type='checkbox' value={this.state.isVaccinated} onChange={this.handleChange}/><br/>
                    <label htmlFor='isHDBApproved'>HDB Approved</label><br/>
                    <input id='isHDBApproved' type='checkbox' value={this.state.isHDBApproved} onChange={this.handleChange}/><br/>
                    <input value='Submit' type='submit' onClick={this.handleSubmit}/><br/>
                </form>
            </div>
            </div>
        )
    }
}

export default AddForm;