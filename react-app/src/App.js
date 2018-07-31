import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
    <ul>
    <li>
    <Link to={`${match.url}/rendering`}>
    Rendering with React
    </Link>
    </li>
    <li>
    <Link to={`${match.url}/components`}>
    Components
    </Link>
    </li>
    <li>
    <Link to={`${match.url}/props-v-state`}>
    Props v. State
    </Link>
    </li>
    </ul>
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
            <Router>
            <Route path="/react-app" component={({match}) => (
                <div>
                    <div className="App">
                        <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React: {this.state.hostname}</h1>
                        </header>
                        <br/>
                        <button onClick={this.handleOnClick}>Fetch Random Name</button>
                        <ul className="App-list">
                        {this.state.apiList.map((y, z) => <li key={z}>{z} - {y}</li>)}
                        </ul>
                        </div>
                        <div>
                        <ul>
                        <li><Link to="/react-app">Home</Link></li>
                        <li><Link to={`${match.url}/about`}>About</Link></li>
                        <li><Link to={`${match.url}/topics`}>Topics</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/react-app" component={Home}/>
                        <Route path={`${match.url}/about`} component={About}/>
                        <Route path={`${match.url}/topics`} component={Topics}/>
                    </div>
                </div>
            )}/>
            </Router>
        )
    }
}

export default App
