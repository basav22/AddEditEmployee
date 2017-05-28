import React, { Component } from 'react';

import EmployeeList from './employee-list.js';
import AppHeader from './app-header.js';

export default class App extends Component {
  render() {
    return (
      <div>
          <AppHeader />
          <EmployeeList />
      </div>
    );
  }
}
