import React, { Component } from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import axios from 'axios';

class Issei extends Component {

  state = {
    ketQuaIsseiPeerage: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5100/dxd/Peerage/Issei')
    .then(response => {
      this.setState({ketQuaIsseiPeerage: response.data});
    })
  }

  render() {
    const { ketQuaIsseiPeerage } = this.state
    
    return (
      <div className="IsseiPeerage">
      </div>
    )
  }
}
export default Issei;



