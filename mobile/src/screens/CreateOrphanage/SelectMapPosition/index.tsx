import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import mapMarkerImg from '../../../../assets/images/marker/marker.png'

import { ParamsMapInterface } from '../../../interfaces/ParamsInterface'
import { useState } from 'react'

export default function SelectMapPosition() {
  const [position, setPosition] = useState<ParamsMapInterface>({
    position: { latitude: 0, longitude: 0 },
  })
  const navigation = useNavigation()

  function handleSelectMapPosition(event: MapEvent) {
    setPosition({ position: event.nativeEvent.coordinate })
  }

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position: position.position })
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.3154561,
          longitude: -51.1850698,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position?.position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.position.latitude,
              longitude: position.position.longitude,
            }}
          />
        )}
      </MapView>
      {position?.position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  },
})
