import React, { Component } from 'react'
import {Image, StyleSheet, Text, TextInput, View} from 'react-native'
import images from './image.jpg'

const App = () => {
  return (
    <StylingReactNativeComponent />
  )
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View 
        style={{
          width: 100, 
          height: 100, 
          backgroundColor: 'teal' ,
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }} 
      />
        <View 
          style={{ 
            padding: 12, 
            backgroundColor: '#F2F2F2' ,
            width: 212,
            borderRadius: 8,
          }}>
          <Image 
            source={ images } 
            style={{ 
              width: 188, 
              height: 107, 
              borderRadius: 8 
            }} 
          />
          <Text 
            style={{ 
              fontSize: 14, 
              fontWeight: 'bold', 
              marginTop: 16 
            }}>
              New Macbook Pro 2020
          </Text>
          <Text 
            style={{ 
              fontSize: 12, 
              fontWeight: 'bold', 
              marginTop: 12,
              color: '#F2994A' 
            }}>
              Rp. 25.000.000
          </Text>
          <Text 
            style={{ 
              fontSize: 12, 
              fontWeight: '300', 
              marginTop: 12,
              color: 'black' 
            }}>
              JAKARTA TIMUR
          </Text>
          <View
            style={{ 
              backgroundColor: '#6FCF97',
              paddingVertical: 6,
              borderRadius: 25,
              marginTop: 20
            }}>
            <Text 
            style={{ 
              fontSize: 14, 
              fontWeight: '600', 
              color: 'white',
              textAlign: 'center'
            }}>
              BELI
          </Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'salmon',
    marginLeft: 20,
    marginTop: 40,
  }
})

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'salmon'}} />
      <Text>Ferrian</Text>
      <Seps />
      <Text>Eka</Text>
      <Text>Septiawan</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Seps = () => {
  return (
    <Text>Ferrian Eka Septiawan</Text>
  )
}

const Photo = () => {
  return <Image source={{ uri: 'https://placeimg.com/100/100/tech' }} style={{ width: 100, height: 100 }} />
}

class BoxGreen extends Component {
  render() {
    return (
      <Text>Ini component dari class</Text>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://placeimg.com/100/100/animals' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text>Ini Hewan</Text>
      </View>
    )
  }
}

export default App