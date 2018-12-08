import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer'
import DemoContainer from './DemoContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomeContainer } />
          <Route exact path='/:id' component={ DemoContainer } />
        </Switch>
      </div>
    )
  }
}
