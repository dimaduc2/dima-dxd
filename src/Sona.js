import React, { Component } from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import axios from 'axios';

class Sona extends Component {

  state = {
    ketQuaSonaPeerage: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5100/dxd/Peerage/Sona')
    .then(response => {
      this.setState({ketQuaSonaPeerage: response.data});
    })
  }

  render() {
    const { ketQuaSonaPeerage } = this.state

    return (
      <div className="SonaPeerage">
      </div>
    )
  }
}
export default Sona;