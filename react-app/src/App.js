import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiList: ["hola", "como"]
        }
    }
    handleOnClick = e => {
        axios.get(':4000/api/values').then(response => console.log(response))
            console.log(response)
            this.setState({apiList: this.state.apiList.push(response.data)})
        })
    }
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <br/>
            <button onClick={this.handleOnClick}>Fetch Random Name</button>
            <ul className="App-list">
            {this.state.apiList.map((y, z) => <li key={z}>{z} - {y}</li>)}
            </ul>
            </div>
        )
    }
}

export default App
