import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Movies from './Movies'
import Confirmation from './Confirmation'
const AppNavigator = createStackNavigator({
    Home: Movies,
    Confirmation: Confirmation
},
    {
        initialRouteName: "Home"
    })

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
