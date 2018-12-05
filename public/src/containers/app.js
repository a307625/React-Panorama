import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import DemoContainer from './DemoContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ DemoContainer } />
        </Switch>
      </div>
    );
  }
}
