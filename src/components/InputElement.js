import React, {Component} from 'react';

export class InputElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false,
        }
        this.toggleEditableState = this.toggleEditableState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    toggleEditableState () {
        if (this.state.editable === false) {
            this.setState({
                editable: true
            })
        } else {
            this.setState({
                editable: false
            })
        }
    }
    handleChange (e) {
        this.props.handleChange(e)
    }
    render () {
        return (
            <React.Fragment>
                {(this.state.editable ===false) ? 
                <p onDoubleClick={this.toggleEditableState}>{this.props.content}</p> : 
                <input 
                    value={this.props.content} 
                    onChange={this.handleChange}
                    id={this.props.id}
                />   
                }
            </React.Fragment>
        )
    }
}

export default InputElement;