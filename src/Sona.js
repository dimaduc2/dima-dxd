import React, { Component } from 'react'
import { Grid, Card, Image, Popup, Button } from 'semantic-ui-react'
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

  xoa=(id)=>{
    var r = window.confirm("Có xóa không?");
    if(r === true){
      axios.get('http://localhost:5100/dxd/Peerage/xoa/Sona?idMuonXoa=' + id)
      // axios.get('http://localhost:5100/dxd/Peerage/xoa?idMuonXoa=' + id + '&tenCoCuaAiDo=Sona')
      .then(response => {
        this.setState({ketQuaSonaPeerage: response.data});
      })
    }
  }

  render() {
    const { ketQuaSonaPeerage } = this.state

    return (
      <div className="SonaPeerage">

        {ketQuaSonaPeerage
          ?
            <Grid align='center'>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <h1>King</h1>
                  <Popup
                    content={<div>
                      <Image src={ketQuaSonaPeerage.King.image} size='big'></Image>
                      Name: {ketQuaSonaPeerage.King.name}
                      <br/>
                      Gender: {ketQuaSonaPeerage.King.gender}
                      <br/>
                      Love: {ketQuaSonaPeerage.King.love}
                      <br/>
                      Original: {ketQuaSonaPeerage.King.original}
                      <br/>
                      Power: {ketQuaSonaPeerage.King.power}
                      <br/>
                      Peerage: {ketQuaSonaPeerage.King.peerage}
                    </div>}
                    on='click'
                    pinned
                    trigger={<Image src={ketQuaSonaPeerage.King.image} size='small'></Image>}
                    position='center'
                  />
                  <br/>
                  King tên là {ketQuaSonaPeerage.King.name}
                  <br/>
                  <Button onClick={() => this.xoa(ketQuaSonaPeerage.King._id)}>X</Button>
                </Grid.Column>

                <Grid.Column>
                  <h1>Queen</h1>
                  <Popup
                    content={<div>
                      <Image src={ketQuaSonaPeerage.Queen.image} size='big'></Image>
                      Name: {ketQuaSonaPeerage.Queen.name}
                      <br/>
                      Gender: {ketQuaSonaPeerage.Queen.gender}
                      <br/>
                      Love: {ketQuaSonaPeerage.Queen.love}
                      <br/>
                      Original: {ketQuaSonaPeerage.Queen.original}
                      <br/>
                      Power: {ketQuaSonaPeerage.Queen.power}
                      <br/>
                      Peerage: {ketQuaSonaPeerage.Queen.peerage}
                    </div>}
                    on='click'
                    pinned
                    trigger={<Image src={ketQuaSonaPeerage.Queen.image} size='small'></Image>}
                    position='center'
                  />
                  <br/>
                  Queen tên là {ketQuaSonaPeerage.Queen.name}
                  <br/>
                  <Button onClick={() => this.xoa(ketQuaSonaPeerage.Queen._id)}>X</Button>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                {ketQuaSonaPeerage.Bishop.map((bishop) =>
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
                    <Button onClick={() => this.xoa(bishop._id)}>X</Button>
                    <br/>
                  </Grid.Column>
                )}
              </Grid.Row>

              <Grid.Row columns={2}>
                {ketQuaSonaPeerage.Knight.map((knight) =>
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
                    <br/>
                    <Button onClick={() => this.xoa(knight._id)}>X</Button>
                  </Grid.Column>
                )}
              </Grid.Row>
              
              <Grid.Row columns={2}>
                {ketQuaSonaPeerage.Rook.map((rook) =>
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
                    <br/>
                    <Button onClick={() => this.xoa(rook._id)}>X</Button>
                  </Grid.Column>
                )}
              </Grid.Row>

              <Grid.Row columns={2}>
                {ketQuaSonaPeerage.Pawn.map((pawn) =>
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
                    <br/>
                    <Button onClick={() => this.xoa(pawn._id)}>X</Button>
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
export default Sona;