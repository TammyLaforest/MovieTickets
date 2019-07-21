import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Movies from '../screens/Movies'
import Confirmation from '../screens/Confirmation'

const AppNavigator = createStackNavigator({
    Home: Movies,
    Confirmation: Confirmation
},
    {
        initialRouteName: "Home"
    })

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
