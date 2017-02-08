import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Favourites, PropertySearch, PropertyListing, SearchResults } from './pages'

render(
  <Router history={hashHistory}>
    <Route path='/' component={PropertySearch}/>
    <Route path='search-results' components={SearchResults}/>
    <Route path='favourites' components={Favourites}/>
    <Route path="property/:propertyId" components={PropertyListing}/>
  </Router>,
  document.getElementById('root')
)
