import React, {Component} from 'react';
import AnimalDetailsModal from './AnimalDetailsModal';

export class AnimalCard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            viewDetailsModal: false,
        }
        this.viewDetails = this.viewDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    viewDetails (e) {
        if (this.state.viewDetailsModal === false) {
            const index = e.target.id;
            this.props.viewDetails(index);
            this.setState({
                viewDetailsModal: true,
            })
        } else {
            this.setState({
                viewDetailsModal: false
            })
        }
    }
    handleChange (e) {
        this.props.handleChange(e);
    }
    handleDelete (e) {
        this.props.handleDelete(e)
    }
    render() {
        return (
            <div className='animal-card'>
                <div className='animal-image'>
                    <img src={`${this.props.data.img}`}/>
                </div>
                <div className='animal-profile'>
                    <h3>{this.props.data.name}</h3>
                    <div className='animal-summary'>
                        <h5>{this.props.data.type}</h5>
                        <h5>{this.props.data.dob}</h5>
                        <h5>{this.props.data.gender}</h5>
                    </div>
                    <div className='card-buttons'>
                        <button onClick={this.viewDetails} id={this.props.data._id}>View Details</button>
                        <button onClick={this.handleDelete} id={`${this.props.data._id}-delete`}>Delete</button>
                    </div>
                </div>

                {(this.state.viewDetailsModal === true) ?
                <AnimalDetailsModal 
                    data = {this.props.data}
                    editDetails = {this.props.editDetails}
                    handleChange = {this.handleChange}
                    handleDelete ={this.handleDelete}
                    id={this.props.data._id}
                    /> : <div></div>
                } 
            </div>
        )
    }
}

export default AnimalCard;