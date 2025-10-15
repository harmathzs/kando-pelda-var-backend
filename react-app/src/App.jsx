import React from 'react'
import Candy from './Candy'
import './App.css'

export default class App extends React.Component {
  state = {
    candies: []
  }

  async fetchCandies() {
    const candiesJson = await fetch('http://localhost:3000/candies')
    const candies = await candiesJson.json()
    console.log(candies)
    this.setState({candies})
  }

  async componentDidMount() {
    await this.fetchCandies()
  }

  handleDeleteAll = async (e) => {
    await fetch('http://localhost:3000/candies', {method: 'DELETE'})
    await this.fetchCandies()
  }

  render() {
    return (
      <>
        <h1>Candies</h1>
        <div className="card">
          {this.state.candies.map(({name, mass, origin})=><Candy key={name} name={name} mass={mass} origin={origin} />)}
        </div>
        <div className='card'>
          <button onClick={this.handleDeleteAll}>Delete All candies</button>
        </div>
      </>
    )
  }
}

