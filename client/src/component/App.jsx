import React from 'react';
import Form from './Form.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      taxes: 0,
      fees: 0,
      rate: 0
    }
    this.getCost = this.getCost.bind(this);
    this.getZipcode = this.getZipcode.bind(this);
  }
  getCost (id) {
    fetch(`http://localhost:4000/api/cars/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },  
    params: JSON.stringify(id)
    })
    .then((res) => {
      return res.json()
  })
  .then((data)=>{
    console.log('data',data)
    this.setState({
          cost:data.car[0].cost
    })
  })
  .catch(err =>{
      console.log(err)
  })
  }
  getZipcode (zipcode) {
      fetch(`http://localhost:4000/api/location/${zipcode}`, {
        headers: {
          'Content-Type': 'application/json'
        },  
        params: JSON.stringify(zipcode)
      })
      .then((res) => {
        return res.json()
    })
    .then((data)=>{
      console.log('data',data)
      this.setState({
            taxes: data.creditScore[0].taxes,
            fees: data.creditScore[0].fees,
            rate: data.creditScore[0].rate
      })
    })
    .catch(err =>{
        console.log(err)
    })
  }
  componentDidMount() {
    this.getCost(1)
    this.getZipcode(60030)
  }
  render() {
    return (
      <div>
        <Form state={this.state} getCost={this.getCost} getZipcode={this.getZipcode}/>
      </div>
    )
  }
}

export default App;