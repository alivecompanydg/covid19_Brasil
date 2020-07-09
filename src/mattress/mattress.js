import React from "react"
import { Alert } from "react-native" 
class Mattress{

    constructor(){
        this.velocity = 0
        this.velocity2 = 0
        this.jumpForce = 0
        this.singleIdentifier = ""
        this.cnv = ""
        this.ctx = ""
        this.host = ""
        this.header = ""
    }

    configure(command) {
        if(command.header){
            this.header = command.header
        }else{
            this.header = ""
        }
        if(command.port){
            this.host = `${command.host}:${command.port}/`
        }else{
            this.host = `${command.host}`
        }
    }

    get(func, route, command) {
        let newHost = this.host//+="/"
        if(route){
            newHost+=route
        }
        if(command){
            newHost += "?"
            for(const index in command){
                const itemName = index
                const itemValue = command[index]
                newHost += `${itemName}=${itemValue}&`
            }
            newHost = newHost.substring(0,(newHost.length - 1))
        }
        fetch(newHost, {
            mode:"cors",
            method:"GET"
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            func(data)
        })
        .catch((err) => {
            func(err)
            //throw new Error("Algo deu errado")
            //console.log(err)
        })
    }

    post(func, route, command) {
        let newHost = this.host+="/"
        if(route){
            newHost+=route
        }
        if(command){
            newHost += "?"
            for(const index in command){
                const itemName = index
                const itemValue = command[index]
                newHost += `${itemName}=${itemValue}&`
            }
            newHost = newHost.substring(0,(newHost.length - 1))
        }
        fetch(newHost, {
            mode:"cors",
            method:"POST"
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            func(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

}

export default Mattress