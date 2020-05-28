import React, { Component } from 'react'
import CardList from './components/card-list.jsx'
import SearchBox from './components/search-box'

export default class App extends Component {

  constructor(){
   super();

   this.state={
   
    Monsters : [],
     searchField:''
   };
   

  }

  componentDidMount(){
      
   fetch('https://jsonplaceholder.typicode.com/users')
  
    .then(response => response.json())
    .then(users => this.setState({Monsters:users}))

  }

  render() {

    const { Monsters , searchField} = this.state;
    const filterMonster = Monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      
        <SearchBox  
        placeHolder='Search Monster'  
        handleChange ={e => this.setState({searchField : e.target.value},()=> console.log(this.state))}/>
       
        <CardList Monsters={filterMonster}/>
  
    </div>
    )
  }
}
