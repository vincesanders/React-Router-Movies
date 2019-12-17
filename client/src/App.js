import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path='/movies/:movieId'>
          <Movie addToSavedList={addToSavedList}/>
        </Route>
        <Route exact path='/'>
        <MovieList />
      </Route>
      </Switch> 
    </div>
  );
};

export default App;
