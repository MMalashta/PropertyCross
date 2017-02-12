import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

const routerMiddleware = createRouterMiddleware(browserHistory)

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware
    ),
    autoRehydrate()
  )
)

persistStore(store, {
  whitelist: ['favourites', 'recentSearches']
})

export default store
