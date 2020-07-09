import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Mattress from "../mattress/mattress"


const mattress = new Mattress()

export class brasilCases extends Component {

    constructor(props){
        super(props)
        this.state = {
          data:[]
        }
    }

    componentDidMount(){
        this.fetchDatas()
    }

    showDatas = () => {
        console.log("DADOS")
        console.log(this.state.data)
    }

    fetchDatas = () => {
        try{
            mattress.configure({
                host:"https://covid19-brazil-api.now.sh/api/report/v1/brazil"
            })
    
            mattress.get(async(data) => {
                console.log(data)
                if(data.data){
                    this.setState({
                        data:data.data
                    })
                }else{
                    mattress.configure({
                        host:"https://api.covid19api.com/country/brazil"
                    })
            
                    mattress.get(async(data) => {
                        console.log(data)
                        this.setState({
                            data:data[data.length-1]
                        })
                        try{
                            this.showDatas()
                        }catch(err){
                            console.log(err)
                        }
                    })
                }
                try{
                    this.showDatas()
                }catch(err){
                    console.log(err)
                }
            })
        }catch(err){
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.country}> BRASIL </Text>
                <Text style={styles.datas}> SUSPEITAS: {this.state.data.cases ? this.state.data.cases : this.state.data.Active} </Text>
                <Text style={styles.datas}> CONFIRMADOS: {this.state.data.confirmed ? this.state.data.confirmed : this.state.data.Confirmed} </Text>
                <Text style={styles.datas}> MORTES: {this.state.data.deaths ? this.state.data.deaths : this.state.data.Deaths} </Text>
                <Text style={styles.datas}> CURADOS:  {this.state.data.recovered ? this.state.data.recovered : this.state.data.Recovered} </Text>
            </View>
        )
    }
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
        marginBottom:20
    },

    datas: {
        fontSize:17,
        borderBottomWidth:1,
        width:200,
        textAlign:"left"
    }
})

export default brasilCases
