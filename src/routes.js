import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./pages/home"
import BrasilCases from "./pages/brasilCases"
import StatesCases from "./pages/statesCases"

const AppStack = createStackNavigator()

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="BrasilCases" component={BrasilCases} />
                <AppStack.Screen name="StatesCases" component={StatesCases} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes