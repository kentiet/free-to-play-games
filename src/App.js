import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import ErrorBoundry from './components/ErrorBoundry.component';
import SearchField from './components/search/search.component';
import data from './db.json'
// import FilterTool from './components/filter-tool/filter-tool.component'

function App() {
  const [games, setGames] = useState([]);
  const [searchField, setSearchField] = useState('');

  const fetchData = () => {
    fetch('https://cors.bridged.cc/https://freetogame.com/api/games')
      .then((err, res) => {
        if (err) {
          const loadData = JSON.stringify(data)
          const json = JSON.parse(loadData)
          console.log(json);
          return json
        }
        if (res.status === 200) return res.json();
      })
      .then((games) => setGames(games))
      .catch((err) => {
        console.error({
          message: `can't load the data from this API, error: ${err}`,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <h1 className="title">Free To Play Games</h1>
      <SearchField onSearchChange={onSearchChange} />
      <ErrorBoundry>
        <CardList games={filteredGames} />
      </ErrorBoundry>
    </div>
  );
}

export default App;
