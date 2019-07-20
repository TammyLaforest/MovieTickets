import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { apiMiddleware, reducer } from './redux/redux'

const store = CreateStore(reducer, {}, applyMiddleware(apiMiddleware))

store.dispatch({ type: 'GET_MOVIE_DATA' })


import AppContainer from './Navigation/navigation'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}