
import React, { Component } from 'react'
import { Grid, Card, Image, Button } from 'semantic-ui-react'
import axios from 'axios';

import Rias from './Rias'
import Issei from './Issei'
import Sona from './Sona'


class Peerage extends Component {

  state = {
    ketQuaPeerage: [],
    banCoGi: ''

  }

  componentDidMount() {
    axios.get('http://localhost:5100/dxd/Peerage')
    .then(response => {
    
      this.setState({ketQuaPeerage: response.data});
    })
  }
  
  thayDoiBanCo = (banCo) => {
      // alert(banCo)
      this.setState({banCoGi: banCo})
      
      
  }

  render() {
    const { ketQuaPeerage, banCoGi } = this.state
    const {  } = this.props

    return (
      <div className="Peerage">
        <h1>Peerage</h1>
        {/* <Grid divided align='center'>
          <Grid.Row> */}


          <Button onClick={() => this.thayDoiBanCo('Rias')}>Rias's Peerage</Button>
          <Button onClick={() => this.thayDoiBanCo('Issei')}>Issei's Peerage</Button>
          <Button onClick={() => this.thayDoiBanCo('Sona')}>Sona's Peerage</Button>

          <br/><br/>

          {banCoGi === 'Rias'
            ? <Rias />
            : banCoGi === 'Issei'
              ? <Issei />
              : banCoGi === 'Sona'
                ? <Sona />
                : null
          }



            <br/><br/><br/><br/><br/>
            {/* <Grid.Column width={12}>
              <Grid divided align='center' columns={3}>
                {ketQuaPeerage.map((moiPeerage) =>
                <Grid.Column>
                  <Card>
                    <Card.Content>


                      <Image src={moiPeerage.image}></Image>
                        <br/><br/>
                        Tên: {moiPeerage.name}
                        <br/><br/>
                        Giới tính: {moiPeerage.gender}
                        <br/><br/>
                        Người yêu: {
                          moiPeerage.love.map((moiLove) => 
                          <div>{moiLove}</div>
                        )}
                        <br/>
                        Người ban đầu: {moiPeerage.original}
                        <br/><br/>
                        Sức mạnh: {
                          moiPeerage.power.map((moipower) => 
                          <div>{moipower}</div>
                        )}
                        <br/>
                        Bàn cờ: {
                          moiPeerage.peerage.map((moipeerage) => 
                          <div>{moipeerage}</div>
                          )}
                        <br/><br/><br/><br/><br/>
                    
                  </Card.Content>
                 </Card>
                </Grid.Column>
                
                )}
                





              </Grid>
            </Grid.Column> */}
          {/* </Grid.Row>
        </Grid> */}
      
      
      </div>
    )
  }
}
export default Peerage;