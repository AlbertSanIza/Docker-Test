import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

const Home = () => (
    <div>
    <h2>Home</h2>
    </div>
)
const About = () => (
    <div>
    <h2>About</h2>
    </div>
)
const Topic = ({ match }) => (
    <div>
    <h3>{match.params.topicId}</h3>
    </div>
)
const Topics = ({ match }) => (
    <div>
    <h2>Topics</h2>
    <Link to={`${match.url}/rendering`}>
    Rendering with React
    </Link> <Link to={`${match.url}/components`}>
    Components
    </Link> <Link to={`${match.url}/props-v-state`}>
    Props v. State
    </Link>
    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
    )}/>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiList: [],
            hostname: window.location.hostname
        }
    }
    handleOnClick = e => {
        axios.get("http://" + this.state.hostname + '/api/values').then(response => {
            this.setState({apiList: this.state.apiList.concat(response.data[0])})
        })
    }
    render() {
        return (
            <HashRouter>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React: {this.state.hostname}</h1>
                </header>
                <div>
                <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/topics">Topics</Link>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
                <hr/>
                </div>
                <br/>
                <button onClick={this.handleOnClick}>Fetch Random Name</button>
                <ul className="App-list">
                {this.state.apiList.map((y, z) => <li key={z}>{z} - {y}</li>)}
                </ul>
            </div>
            </HashRouter>
        )
    }
}

export default App
