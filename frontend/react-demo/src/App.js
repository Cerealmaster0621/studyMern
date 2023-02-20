import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor')
    super();
    this.state = {
      names : [],
      searchField : ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json())
      .then((users)=>{
        this.setState(
          ()=>{return ({names : users})},
        ()=>{console.log(users)}
        )
      })
  }

  onSearchchange = (event)=>{
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{return {searchField}})
  }

  render() {
    //기존의 state 에서 searchField 라는 field 추가 (input 박스에서 글자 추가되면 setState로 this.state.searchField 도 추가)
    //render() 안, return 바깥쪽에 새로운 array 추가, state.names를 직접 modify 하는게 아닌 새로운 array 를 지속적으로 modify 하려고 만듬.
    //새로운 array 를 mapping 해서 검색결과 보여줌
    const filteredNames = this.state.names.filter((name)=>{
      return name.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className = "App">
        <SearchBox onChangeHandler = {this.onSearchchange} placeholder='search name' className = "search-box"/>
        <CardList names = {filteredNames}/>
      </div>
    )
  }
}

export default App;
