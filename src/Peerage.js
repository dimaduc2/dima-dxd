
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon } from 'semantic-ui-react'
import axios from 'axios';

import Rias from './Rias'
import Issei from './Issei'
import Sona from './Sona'
import Add from './Add'

import Ddraig1 from './Ddraig 1.jpg';
import Gremory1 from './Gremory 1.jpg';
import Sitri1 from './Sitri 1.jpg';

import Ddraig2 from './Ddraig 2.jpg';
import Gremory2 from './Gremory 2.jpg';
import Sitri2 from './Sitri 2.jpg';

class Peerage extends Component {

  state = {
    ketQuaPeerage: [],
    banCoGi: '',

    anhRias: Gremory1,
    anhIssei: Ddraig1,
    anhSona: Sitri1,


    // stringColorRias: 'black',
    // stringColorIssei: 'black',
    // stringColorSona: 'black',
    // stringColorAdd: 'black',
  }

  componentDidMount() {
    axios.get('http://localhost:5100/dxd/Peerage')
    .then(response => {
      this.setState({ketQuaPeerage: response.data});

    })
  }
  
  thayDoiBanCo = (banCo) => {
    
    if(this.state.banCoGi === banCo){
      this.setState({banCoGi: ''})
    }
    else{
      this.setState({banCoGi: banCo});
    }

    
    // this.setState({banCoGi: banCo})

    // if(banCo==='Rias'){
    //   this.setState({stringColorRias: 'red', stringColorIssei: 'black', stringColorSona: 'black', stringColorAdd:'black'});
    // }
    // else if(banCo==='Issei'){
    //   this.setState({stringColorIssei: 'green', stringColorRias: 'black', stringColorSona: 'black', stringColorAdd:'black'});
    // }
    // else if(banCo==='Sona'){
    //   this.setState({stringColorSona: 'blue', stringColorRias: 'black', stringColorIssei: 'black', stringColorAdd:'black'});
    // }
  }

  // themNguoiBanCo = () => {
  //   this.setState({banCoGi: 'Add'})
  //   // this.setState({banCoGi: 'Add', stringColorAdd:'orange', stringColorSona: 'black', stringColorRias: 'black', stringColorIssei: 'black'})
  // }
  
  render() {
    const { ketQuaPeerage, banCoGi, stringColorRias, stringColorIssei, stringColorSona, stringColorAdd } = this.state
    const {  } = this.props

    return (
      <div className="Peerage" align='center'>
        <h1>Peerage</h1>

        {/* <Grid divided align='center'>
          <Grid.Row> */}

              <Grid divided='vertically'>
                <Grid.Row columns={4}>
                  
                  {ketQuaPeerage.map((moiPeerage) =>
                    <Grid.Column>
                      <Image src={banCoGi === moiPeerage.name ?moiPeerage.imageColor :moiPeerage.image} size={banCoGi === moiPeerage.name ?'small' :'tiny'} circular onClick={() => this.thayDoiBanCo(moiPeerage.name)}></Image>
                      <span style={{color: banCoGi === moiPeerage.name ?moiPeerage.nameColor :'black'}} onClick={() => this.thayDoiBanCo(moiPeerage.name)}>Gremory</span>
                    </Grid.Column>
                  )}
                  
                  {/* <Grid.Column>
                    <Image src={banCoGi === 'Rias' ?Gremory2 :Gremory1} size={banCoGi === 'Rias' ?'small' :'tiny'} circular onClick={() => this.thayDoiBanCo('Rias')}></Image>
                    <span style={{color: banCoGi === 'Rias' ?'red' :'black'}} onClick={() => this.thayDoiBanCo('Rias')}>Gremory</span>
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={banCoGi === 'Issei' ?Ddraig2 :Ddraig1} size={banCoGi === 'Issei' ?'small' :'tiny'} circular onClick={() => this.thayDoiBanCo('Issei')}></Image>
                    <span style={{color: banCoGi === 'Issei' ?'green' :'black'}} onClick={() => this.thayDoiBanCo('Issei')}>Ddraig</span>
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={banCoGi === 'Sona' ?Sitri2 :Sitri1} size={banCoGi === 'Sona' ?'small' :'tiny'} circular onClick={() => this.thayDoiBanCo('Sona')}></Image>
                    <span style={{color: banCoGi === 'Sona' ?'blue' :'black'}} onClick={() => this.thayDoiBanCo('Sona')}>Sitri</span>
                  </Grid.Column> */}
                  <Grid.Column>
                  <Icon color={banCoGi === 'Add' ?'orange' :'black'} name='plus' size={banCoGi === 'Add' ?'massive' :'huge'} onClick={() => this.thayDoiBanCo('Add')}></Icon>
                  <div style={{color: banCoGi === 'Add' ?'orange' :'black'}}>Add</div>
                  {/* <Icon name='plus' size='huge' onClick={() => this.themNguoiBanCo()}></Icon><div style={{color: banCoGi === 'Add' ?'orange' :'black'}}>Add</div> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>

        
            {/* <Grid divided='vertically'>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Image src={Gremory} size='tiny' circular onClick={() => this.thayDoiBanCo('Rias')}></Image><span style={{color: stringColor==='red'}}>Gremory</span>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Ddraig} size='tiny' circular onClick={() => this.thayDoiBanCo('Issei')}></Image><span style={{color: stringColor==='green'}}>Ddraig</span>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Sitri} size='tiny' circular onClick={() => this.thayDoiBanCo('Sona')}></Image><span style={{color: stringColor==='blue'}}>Sitri</span>
                </Grid.Column>
                <Grid.Column>
                  <Icon name='plus' size='huge' onClick={() => this.themNguoiBanCo('Add')}></Icon><div style={{color: stringColorAdd}}>Add</div>
                </Grid.Column>
              </Grid.Row>
            </Grid> */}

        
            <br/><br/>

            {
            

            banCoGi === 'Rias'
              ? <Rias />
              : banCoGi === 'Issei'
                ? <Issei />
                : banCoGi === 'Sona'
                  ? <Sona />
                  : banCoGi === 'Add'
                    ? <Add />
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