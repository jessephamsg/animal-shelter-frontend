import React, {Component} from 'react';

export class AnimalCard extends Component {
    constructor (props) {
        super(props)
        this.viewDetails = this.viewDetails.bind(this);
    }
    viewDetails (e) {
        const index = e.target.id;
        this.props.viewDetails(index)
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
                {/* {(this.props.data.isSterilised) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>Sterilised</p>
                {(this.props.data.isMicrochipped) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>Microchipped</p>
                {(this.props.data.isVaccinated) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>Vacinated</p>
                {(this.props.data.isHDBApproved) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>HDB Approved</p>
                <p>{this.props.data.description}</p> */}
            </div>
        )
    }
}

export default AnimalCard;