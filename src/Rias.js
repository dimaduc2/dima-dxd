import React, { Component } from 'react'
import { Grid, Card, Image, Popup, Button } from 'semantic-ui-react'
import axios from 'axios';

class Rias extends Component {

  state = {
    ketQuaRiasPeerage: ''
  }
  
  componentDidMount() {
    axios.get('http://localhost:5100/dxd/Peerage/Rias')
    .then(res => {
      this.setState({ketQuaRiasPeerage: res.data});
    })
  }

  render() {
    const { ketQuaRiasPeerage } = this.state
    
    return (
      <div className="RiasPeerage">
        {ketQuaRiasPeerage
          ?
            <Grid align='center'>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <h1>King</h1>
                  <Popup
                    content={<div>
                      <Image src={ketQuaRiasPeerage.King.image} size='big'></Image>
                      Name: {ketQuaRiasPeerage.King.name}
                      <br/>
                      Gender: {ketQuaRiasPeerage.King.gender}
                      <br/>
                      Love: {ketQuaRiasPeerage.King.love}
                      <br/>
                      Original: {ketQuaRiasPeerage.King.original}
                      <br/>
                      Power: {ketQuaRiasPeerage.King.power}
                      <br/>
                      Peerage: {ketQuaRiasPeerage.King.peerage}
                    </div>}
                    on='click'
                    pinned
                    trigger={<Image src={ketQuaRiasPeerage.King.image} size='small'></Image>}
                    position='center'
                  />
                  <br/>
                  King tên là {ketQuaRiasPeerage.King.name}
                </Grid.Column>

                <Grid.Column>
                  <h1>Queen</h1>
                  <Popup
                    content={<div>
                      <Image src={ketQuaRiasPeerage.Queen.image} size='big'></Image>
                      Name: {ketQuaRiasPeerage.Queen.name}
                      <br/>
                      Gender: {ketQuaRiasPeerage.Queen.gender}
                      <br/>
                      Love: {ketQuaRiasPeerage.Queen.love}
                      <br/>
                      Original: {ketQuaRiasPeerage.Queen.original}
                      <br/>
                      Power: {ketQuaRiasPeerage.Queen.power}
                      <br/>
                      Peerage: {ketQuaRiasPeerage.Queen.peerage}
                    </div>}
                    on='click'
                    pinned
                    trigger={<Image src={ketQuaRiasPeerage.Queen.image} size='small'></Image>}
                    position='center'
                  />
                  <br/>
                  Queen tên là {ketQuaRiasPeerage.Queen.name}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                {ketQuaRiasPeerage.Bishop.map((bishop) =>
                  <Grid.Column>
                    <h1>Bishop</h1>
                    <Popup
                      content={<div>
                        <Image src={bishop.image} size='big'></Image>
                        Name: {bishop.name}
                        <br/>
                        Gender: {bishop.gender}
                        <br/>
                        Love: {bishop.love}
                        <br/>
                        Original: {bishop.original}
                        <br/>
                        Power: {bishop.power}
                        <br/>
                        Peerage: {bishop.peerage}
                      </div>}
                      on='click'
                      pinned
                      trigger={<Image src={bishop.image} size='small'></Image>}
                      position='center'
                    />
                    <br/>
                    Bishop tên là {bishop.name}
                    <br/>
                  </Grid.Column>
                )}
              </Grid.Row>

              <Grid.Row columns={2}>
                {ketQuaRiasPeerage.Knight.map((knight) =>
                  <Grid.Column>
                    <h1>Knight</h1>
                    <Popup
                      content={<div>
                        <Image src={knight.image} size='big'></Image>
                        Name: {knight.name}
                        <br/>
                        Gender: {knight.gender}
                        <br/>
                        Love: {knight.love}
                        <br/>
                        Original: {knight.original}
                        <br/>
                        Power: {knight.power}
                        <br/>
                        Peerage: {knight.peerage}
                      </div>}
                      on='click'
                      pinned
                      trigger={<Image src={knight.image} size='small'></Image>}
                      position='center'
                    />
                    <br/>
                    Knight tên là {knight.name}
                  </Grid.Column>
                )}
              </Grid.Row>
              
              <Grid.Row columns={2}>
                {ketQuaRiasPeerage.Rook.map((rook) =>
                  <Grid.Column>
                    <h1>Rook</h1>
                    <Popup
                      content={<div>
                        <Image src={rook.image} size='big'></Image>
                        Name: {rook.name}
                        <br/>
                        Gender: {rook.gender}
                        <br/>
                        Love: {rook.love}
                        <br/>
                        Original: {rook.original}
                        <br/>
                        Power: {rook.power}
                        <br/>
                        Peerage: {rook.peerage}
                      </div>}
                      on='click'
                      pinned
                      trigger={<Image src={rook.image} size='small'></Image>}
                      position='center'
                    />
                    <br/>
                    Rook tên là {rook.name}
                  </Grid.Column>
                )}
              </Grid.Row>

              <Grid.Row columns={2}>
                {ketQuaRiasPeerage.Pawn.map((pawn) =>
                  <Grid.Column>
                    <h1>Pawn</h1>
                    <Popup
                      content={<div>
                        <Image src={pawn.image} size='big'></Image>
                        Name: {pawn.name}
                        <br/>
                        Gender: {pawn.gender}
                        <br/>
                        Love: {pawn.love}
                        <br/>
                        Original: {pawn.original}
                        <br/>
                        Power: {pawn.power}
                        <br/>
                        Peerage: {pawn.peerage}
                      </div>}
                      on='click'
                      pinned
                      trigger={<Image src={pawn.image} size='small'></Image>}
                      position='center'
                    />
                    <br/>
                    Pawn tên là {pawn.name}
                  </Grid.Column>
                )}
              </Grid.Row>

            </Grid>
                
          : null
        }
      </div>
    )
  }
}
export default Rias;



