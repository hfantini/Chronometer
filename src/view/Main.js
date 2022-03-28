import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

// == STYLES

let style = StyleSheet.create(
{
    container:
    {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    header:
    {
        height: 60
    },
    body:
    {
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

// == COMPONENT

class Main extends Component
{
    render()
    {
        return(

            <View style={style.container}>

                <View style={style.header}>

                    <Header />

                </View>

                <View style={style.body}>

                    <Body />
                    
                </View> 

            </View>
        )
    }
}

// == EXPORTS 

export default Main;