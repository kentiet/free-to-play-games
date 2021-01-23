import React, {useState, useEffect} from 'react'
import './App.css';

import CardList from './components/card-list/card-list.component'
import ErrorBoundry from './components/ErrorBoundry.component'

function App() {

  const[games, setGames] = useState([])

  useEffect(()=>{
    fetch('https://cors-anywhere.herokuapp.com/https://freetogame.com/api/games')
    .then(res => res.json())
    .then(games => setGames(games))
  },[])

  return (
    <div className="App">
      <ErrorBoundry>
          <CardList games={games}/>
      </ErrorBoundry>
    </div>
  );
}

export default App;
