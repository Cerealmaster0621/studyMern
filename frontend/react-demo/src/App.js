import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor')
    super();
    this.state = {
      names : []
    }
  }
  
  componentDidMount() {
    console.log('didmount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json())
      .then((users)=>{
        this.setState(
          ()=>{return ({names : users})},
        ()=>{console.log(users)}
        )
      })
  }

  render() {
    console.log('render')
    return (
      <div className = "App">
        {this.state.names.map((m)=>{
          return <div key={m.id}>
            <h1>{m.name}</h1>
          </div>;
        })}
      </div>
    )
  }
}

export default App;
