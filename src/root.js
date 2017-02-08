import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import PropertySearch from './pages/PropertySearch'
import SearchResults from './pages/SearchResults'
import Favourites from './pages/Favourites'

render(
  <Router history={hashHistory}>
    <Route path='/' component={PropertySearch}/>
    <Route path='search-results' components={SearchResults}/>
    <Route path='favourites' components={Favourites}/>
  </Router>,
  document.getElementById('root')
)
