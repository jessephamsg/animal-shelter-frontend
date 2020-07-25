import React, {Component} from 'react';

export class AnimalDetailsModal extends Component {
    render () {
        return (
            <div>
                {(this.props.isSterilised) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>Sterilised</p>
                {(this.props.isMicrochipped) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>Microchipped</p>
                {(this.props.isVaccinated) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>Vacinated</p>
                {(this.props.isHDBApproved) ? <input type='checkbox' checked/> : <input type='checkbox'/>}
                <p>HDB Approved</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default AnimalDetailsModal;