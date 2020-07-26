import React, {Component} from 'react';
import InputElement from './InputElement'

export class AnimalDetailsModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewText: ['name', 'type', 'dob', 'gender'],
            viewCheckbox: ['isSterilised', 'isMicrochipped', 'isVaccinated', 'isHDBApproved'],
            checkboxHeaders: ['Sterilised', 'isMicrochipped', 'Vaccinated', 'HDBApproved'],
            viewModal: true
        }
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit (e) {
        this.props.editDetails(e);
        this.setState({
            viewModal: false
        })
    }
    handleChange (e) {
        this.props.handleChange(e);
    }
    render () {
        if(this.state.viewModal) {
            return (
                <div className='animal-details-modal'>
                <div className='animal-details-modal-content'>
                <h2>Animal Details</h2>
                <h7>Double click on the text to edit</h7>
                    {(this.state.viewText).map(text => {
                        return (
                            <InputElement 
                                content={this.props.data[text]} 
                                id={`${this.props.data._id}-${text}`}
                                handleChange = {this.handleChange}
                            />  
                        )
                    }
                    )}
                    <div className='checkboxes'>
                        {(this.state.viewCheckbox).map((text, index) => {
                            return (
                                <div className='checkbox-label-pair'>
                                    {
                                        (this.props.data[text]) ? 
                                        <input type='checkbox' id={`${this.props.data._id}-${text}`} onChange = {this.handleChange} checked /> : 
                                        <input type='checkbox' id={`${this.props.data._id}-${text}`} onChange = {this.handleChange}/>
                                    }
                                    <p>{this.state.checkboxHeaders[index]}</p>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <p>{this.props.description}</p>
                    <button onClick={this.handleSubmit} id={`${this.props.data._id}-submit`}>Submit Edits</button>
                </div>
                </div> 
            )
        } else {
            return (
                <div></div>
            )
        }
    } 
}

export default AnimalDetailsModal;