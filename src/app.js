import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';

import { apiMiddleware, reducer } from './redux'

import AppContainer from './Navigation/navigation'

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware))

store.dispatch({ type: 'GET_MOVIE_DATA' })

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}