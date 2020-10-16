import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import HeaderInterface from './HeaderInterface'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, canClose = false }: HeaderInterface) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {canClose ? (
        <BorderlessButton
          onPress={() => {
            navigation.navigate('OrphanagesMap')
          }}
        >
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
})

export default Header
