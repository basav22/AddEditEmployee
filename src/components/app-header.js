import React, {Component} from 'react';

import {bindActionCreators} from 'redux';

import {addEmployee as addEmployeeHandler} from '../actions/index.js';

import {connect} from 'react-redux';

class AppHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            age: ''
        };
    }

    setId(event) {
        let id = event.target.value;
        this.setState({id});
    }

    setName(event) {
        let name = event.target.value;
        this.setState( {name} );
    }

    setAge(event) {
        let age = event.target.value;
        this.setState( {age} );
    }

    getEmployeeObj() {
        return {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age
        };
    }

    reset(){
        this.setState({
            id: null,
            name: null,
            age: null
        });
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.addEmployee(this.getEmployeeObj()); 
        this.reset();
    }

    render() {
        return (
            <div>
                <form name="add-edit-employee-form" className="form-inline" onSubmit={ (event) => this.onSubmitForm(event) }>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="employeeId">Employee ID</label>
                        <input type="text" className="form-control" placeholder="id" value={this.state.id} onChange={this.setId.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="employeeName">Employee Name</label>
                        <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.setName.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="employeeAge">Employee Age</label>
                        <input type="text" className="form-control" placeholder="age" value={this.state.age} onChange={this.setAge.bind(this)}/>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-default"
                        >Add Employee</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addEmployee: addEmployeeHandler
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AppHeader);