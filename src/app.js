import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native'

import { createStackNavigator, createAppContainer } from "react-navigation";

import Movies from './Movies';

const AppNavigator = createStackNavigator({
    Home: Movies
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
    render() {
        return <AppContainer />
    }
}


// const RouteMapper = (route, navigator) => {
//     if (route.name === 'movies') {
//         return <Movies navigator={navigator} />;
//     }
// };
{/* <Navigator
                // Default to movies route
                initialRoute={{ name: 'movies' }}

                // Use FloatFromBottom transition between screens
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}

                // Pass a route mapper functions
                renderScene={RouteMapper}
            /> */}