import React, {Component} from 'react';
import AnimalDetailsModal from './AnimalDetailsModal';

export class AnimalCard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            viewDetailsModal: false
        }
        this.viewDetails = this.viewDetails.bind(this);
    }
    viewDetails (e) {
        if (this.state.viewDetailsModal === false) {
            const index = e.target.id;
            this.props.viewDetails(index);
            this.setState({
                viewDetailsModal: true
            })
        } else {
            this.setState({
                viewDetailsModal: false
            })
        }
    }
    render() {
        return (
            <div>
                <img src={`${this.props.data.img}`}/>
                <h3>{this.props.data.name}</h3>
                <h5>{this.props.data.type}</h5>
                <h5>{this.props.data.dob}</h5>
                <h5>{this.props.data.gender}</h5>
                <button onClick={this.viewDetails} id={this.props.data._id}>View Details</button>
                {(this.state.viewDetailsModal === true) ?
                <AnimalDetailsModal 
                    isSterilised= {this.props.data.isSterilised} 
                    isMicrochipped={this.props.data.isMicrochipped}
                    isVaccinated = {this.props.data.isVaccinated}
                    isHDBApproved = {this.props.data.isHDBApproved}
                    description = {this.props.data.description}
                    /> : <div></div>
                } 
            </div>
        )
    }
}

export default AnimalCard;