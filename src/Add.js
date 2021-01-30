import React, { Component } from 'react'
import { Grid, Card, Image, Popup, Button, Form, Dropdown } from 'semantic-ui-react'
import axios from 'axios';

const options1 = [
  { key: 1, text: 'Male', value: 'Male'},
  { key: 2, text: 'Female', value: 'Female'},
]
const options2 = [
  { key: 1, text: 'Issei', value: 'Issei'},
  { key: 2, text: 'Rias', value: 'Rias'},
  { key: 3, text: 'Sona', value: 'Sona'},
]

const options3 = [
  { key: 1, text: 'King', value: 'King'},
  { key: 2, text: 'Queen', value: 'Queen'},
  { key: 3, text: 'Bishop', value: 'Bishop'},
  { key: 4, text: 'Knight', value: 'Knight'},
  { key: 5, text: 'Rook', value: 'Rook'},
  { key: 6, text: 'Pawn', value: 'Pawn'},
]

class Add extends Component {

  state = {
    nameDxd: '',
    genderDxd: '',
    loveDxd: '',
    originalDxd: '',
    powerDxd: '',
    peerageDxd: '',
    peerageDxdName: '',
    imageDxd: ''
  }

  componentDidMount() {
    
  }

  onChangeName = (e, { value }) => {
    this.setState({
      nameDxd: value
    });
  }
  onChangeGender = (e, { value }) => {
    this.setState({
      genderDxd: value
    });
  }
  onChangeLove = (e, { value }) => {
    this.setState({
      loveDxd: value
    });
  }
  onChangeOriginal = (e, { value }) => {
    this.setState({
      originalDxd: value
    });
  }
  onChangePower = (e, { value }) => {
    this.setState({
      powerDxd: value
    });
  }
  onChangePeerage = (e, { value }) => {
    this.setState({
      peerageDxd: value
    });
  }
  onChangePeerageName = (e, { value }) => {
    this.setState({
      peerageDxdName: value
    });
  }
  onChangeImage = (e, { value }) => {
    this.setState({
      imageDxd: value
    });
  }

  taoMoi = () => {
    if(this.state.nameDxd === ''){
      alert('đánh chữ vào ô text name')
    }
    else if(this.state.genderDxd === ''){
      alert('đánh chữ vào ô text gender')
    }
    else if(this.state.loveDxd === ''){
      alert('đánh chữ vào ô text love')
    }
    else if(this.state.originalDxd === ''){
      alert('đánh chữ vào ô text original')
    }
    else if(this.state.powerDxd === ''){
      alert('đánh chữ vào ô text power')
    }
    else if(this.state.peerageDxdName === ''){
      alert('đánh chữ vào ô text peerageName')
    }
    else if(this.state.peerageDxd === ''){
      alert('đánh chữ vào ô text peerage')
    }
    else if(this.state.imageDxd === ''){
      alert('đánh chữ vào ô text image')
    }
    else{
      const newPeerage = {
        name: this.state.nameDxd,
        gender: this.state.genderDxd,
        love: this.state.loveDxd,
        original: this.state.originalDxd,
        power: this.state.powerDxd,
        peerage: this.state.peerageDxdName + "'s " + this.state.peerageDxd,
        image: this.state.imageDxd
      };
      axios.post('http://localhost:5100/dxd/Peerage/add', newPeerage)
                  .then(res => {
                    alert(res.data)

                    
                  })
      this.setState({
        nameDxd: '',
        genderDxd: null,
        loveDxd: '',
        originalDxd: '',
        powerDxd: '',
        peerageDxd: '',
        imageDxd: '',
      })
    }
  }

  render() {
    const { ketQuaSonaPeerage } = this.state

    return (
      <div className="Peerage" align='center'>
        <h1>Add Peerage</h1>


        <Form>
          Name: <Form.Input inline
          value={this.state.nameDxd}
          onChange={this.onChangeName}
          />

          Gender: <br/><Dropdown clearable options={options1} onChange={this.onChangeGender} selection />
          <br/><br/>
          
          Love: <Form.Input inline
          value={this.state.loveDxd}
          onChange={this.onChangeLove}
          />

          Original: <Form.Input inline
          value={this.state.originalDxd}
          onChange={this.onChangeOriginal}
          />

          Power: <Form.Input inline
          value={this.state.powerDxd}
          onChange={this.onChangePower}
          />
          
          Peerage: <br/><Dropdown clearable options={options2} onChange={this.onChangePeerageName} selection /><Dropdown clearable options={options3} onChange={this.onChangePeerage} selection />
          <br/><br/>

          image: <Form.Input inline
          value={this.state.imageDxd}
          onChange={this.onChangeImage}
          />
        </Form>
        <Button onClick={this.taoMoi} >thêm peerage</Button>      



        
      </div>
    )
  }
}
export default Add;