import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import OrphanagesMap from '../screens/OrphanagesMap'
import OrphanageDetails from '../screens/OrphanageDetails'
import SelectMapPosition from '../screens/CreateOrphanage/SelectMapPosition'
import OrphanageData from '../screens/CreateOrphanage/OrphanageData'

import Header from '../components/Header'

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap}></Screen>
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" canClose={false} />,
          }}
        ></Screen>
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
        ></Screen>
        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  )
}
