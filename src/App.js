import React, { Component } from 'react'

import {Menu} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import './App.css';
import Home from './Home'
import Peerage from './Peerage'


class App extends Component {

  state = {}

  chonMenu = (e, { name }) => {
    this.setState({ dangChonGi: name});
  }

  render() {
    return (

      <Router >
        <Menu>
          
          <Menu.Item
            as={Link}
            to="/"
            name='Home'
            active={this.state.dangChonGi === 'Home'}
            onClick={this.chonMenu}>
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/Peerage"
            name='Peerage'
            active={this.state.dangChonGi === 'Peerage'}
            onClick={this.chonMenu}>
          </Menu.Item>
          
          {/* <Menu.Item
            as={Link}
            to="/"
            name=''
            active={this.state.dangChonGi === ''}
            onClick={this.chonMenu}>
          </Menu.Item> */}
          
        </Menu>

        <Route exact path = "/"  component = {Home} />

        <Route path = "/Peerage" render={() => <Peerage  />} />
      
      </Router>
    );
  }
}


export default App;
