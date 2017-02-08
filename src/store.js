import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import reducer from './reducers'

const routerMiddleware = createRouterMiddleware(browserHistory)

export default createStore(reducer, applyMiddleware(routerMiddleware))