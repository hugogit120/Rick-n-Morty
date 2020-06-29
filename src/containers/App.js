import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import tachyons from 'tachyons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters : [],
      searchField: ''
    }
  }

  componentDidMount() {
    
    fetch('https://rickandmortyapi.com/api/character/')
    .then(data => {
      return data.json()
    })
    .then(response => {
      this.setState({characters : response.results})
      console.log(response);
      
    })
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
      this.setState({searchField: event.target.value})
  }

  handleDelete = (index) => {
    const stateCopy = this.state.characters
    const filteredChars = stateCopy.filter(char => {
      return char.id !== index
    })
    this.setState({characters: filteredChars})
  }

  render () {
    const {characters, searchField} = this.state
    const filteredChars = characters.filter(char => {
      return char.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return !characters.length ?
    <h1>Loading</h1> :
     (
      <div className='tc'>
        <h1 className='title'>rick n morty</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList characters={filteredChars} handleDelete={this.handleDelete}/>
      </div>
      )
  }
}

export default App;