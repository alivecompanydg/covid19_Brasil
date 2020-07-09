import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

function Home() {

  const navigation = useNavigation()

  function handleNatigationToBrasilCases() {
    navigation.navigate("BrasilCases")
  }

  function handleNatigationToStateCases() {
    navigation.navigate("StatesCases")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COVID-19 Brasil</Text>
      <Text style={styles.subTitle}>Acompanhe todos os casos de covid-19</Text>

      <RectButton style={styles.button} onPress={handleNatigationToBrasilCases}>
          <Text style={styles.textButton}>No Brasil</Text>
      </RectButton>

          <Text style={styles.textbutton}>ou</Text>

      <RectButton style={styles.button} onPress={handleNatigationToStateCases}>
          <Text style={styles.textButton}>Em um estado</Text>
      </RectButton>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems: 'center'
  },

  title: {
    fontSize:22,
    fontWeight:"bold"
  },

  subTitle: {
    fontWeight:"bold"
  },

  button: {
    marginTop:30,
    marginBottom:-35,
    alignItems:"center",
    justifyContent:"center",
    width:200,
    height:40,
    backgroundColor:"#555555",
    borderRadius:6
  },

  textButton: {
    fontWeight:"bold",
    color:"#FFFFFF"
  },

  textbutton: {
    fontWeight:"bold",
    fontSize:17,
    marginTop:60
  }
  
})

export default Home
