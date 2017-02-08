import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import { Favourites, PropertySearch, PropertyListing, SearchResults } from './pages'

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={PropertySearch}/>
      <Route path='search-results' components={SearchResults}/>
      <Route path='favourites' components={Favourites}/>
      <Route path="property/:propertyId" components={PropertyListing}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
