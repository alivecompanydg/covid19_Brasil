import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { RectButton } from "react-native-gesture-handler"
import Mattress from "../mattress/mattress"

const mattress = new Mattress()

const statesCases = () => {

    const [uf, setUf] = useState("sp")
    const [dados, setDados] = useState({})

    function handleButon() {
        const UF = uf.toLowerCase()
        mattress.configure({
            host:`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${UF}`
        })

        mattress.get(async(data) => {
            //await Object.assign(dados, data)
            await setDados(data)
        })
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.uf}> Digite o UF: </Text>
            <TextInput
            onChangeText={setUf}
            placeholder="   DIGITE O UF"
            style={styles.textArea} />

            <RectButton style={styles.button} onPress={handleButon}>
                <Text style={styles.textButton}>Pesquisar</Text>
            </RectButton>

                <Text style={styles.country}> {dados.state ? `ESTADO: ${dados.state}` : ""} </Text>
                <Text style={styles.datas}> { dados.suspects ? `SUSPEITAS: ${dados.suspects}` : ""} </Text>
                <Text style={styles.datas}> { dados.cases ? `CONFIRMADOS: ${dados.cases}` : ""} </Text>
                <Text style={styles.datas}> { dados.deaths ? `MORTES: ${dados.deaths}` : ""} </Text>
                <Text style={styles.datas}> { dados.refuses ? `CURADOS: ${dados.refuses}` : ""} </Text>

        </KeyboardAvoidingView>
    )
}

const styles = new StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#fff'
    },

    country: {
        fontWeight:"bold",
        fontSize:22,
        marginBottom:20,
        marginTop:50
    },

    datas: {
        fontSize:17,
        width:200,
        textAlign:"left"
    },

    uf: {
        fontSize:16,
        fontWeight:"bold",
        marginBottom:9
    },

    textArea: {
        borderWidth: 1,
        width:200,
        height:40,
        borderRadius: 4
    },

    button: {
        marginTop:20,
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
    }
})

export default statesCases
