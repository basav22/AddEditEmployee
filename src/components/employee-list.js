import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {removeEmployee as removeEmployeeHandler} from '../actions/index.js';

class EmployeeList extends Component {

    renderEmployeeItemList() {
        return this.props.employeeList.map( (employee) => {
            return (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td><button 
                            className="btn btn-link btn-danger remove-btn"
                            onClick= {() => { this.props.removeEmployee(employee) }}
                            >Remove</button></td>
                </tr>
            );
        });
    }

    render() {
        if(!this.props.employeeList || this.props.employeeList.length == 0)
            return (
                <div>
                    <p>No Entries Found</p>
                </div>
            )
        return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderEmployeeItemList() }
                </tbody>
            </table>
        )    
    }
}

function mapStateToProps({employeeList}) {
    return {
        employeeList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeEmployee: removeEmployeeHandler
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);