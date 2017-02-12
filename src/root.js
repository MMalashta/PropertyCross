import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Favourites, PropertySearch, PropertyListing, SearchResults } from './pages'
import store from './store'
import './styles/main.scss'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={PropertySearch}/>
      <Route path='search-results' components={SearchResults}/>
      <Route path='favourites' components={Favourites}/>
      <Route path="property/:propertyId" components={PropertyListing}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
