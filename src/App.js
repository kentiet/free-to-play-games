import React, {useState, useEffect} from 'react'
import './App.css';

import CardList from './components/card-list/card-list.component'
import ErrorBoundry from './components/ErrorBoundry.component'
import SearchField from './components/search/search.component'
// import FilterTool from './components/filter-tool/filter-tool.component'

function App() {

  const[games, setGames] = useState([])
  const[searchField, setSearchField] = useState('')

  useEffect(()=>{
    fetch('https://cors-anywhere.herokuapp.com/https://freetogame.com/api/games')
    .then(res => res.json())
    .then(games => setGames(games))
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredGames = games.filter(game => {
    return game.title.toLowerCase().includes(searchField.toLowerCase())
  })

  
  return (
    <div className="App">
      <h1 className='title'>Free To Play Games</h1>
      <SearchField onSearchChange={onSearchChange}/>
      <ErrorBoundry>
          <CardList games={filteredGames}/>
      </ErrorBoundry>
    </div>
  );
}

export default App;
