import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";

// == STYLES

let style = StyleSheet.create(
    {
        container:
        {
            backgroundColor: "#FF6A00",
            flexDirection: "row",
            flex: 1
        },
        containerLeft:
        {
            flex: 1,
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start"
        },
        containerRight:
        {
            flex: 1,
            marginRight: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end"
        },
        title:
        {
            fontSize: 20,
            fontFamily: "Roboto",
            color: "#FFFFFF"
        }
    }
)

// == COMPONENT

class Header extends Component
{

    render()
    {
        return(
            <View style={style.container}>

                <View style={style.containerLeft}>

                    <Text style={style.title}>
                        CRONÔMETRO
                    </Text>

                </View>

                <View style={style.containerRight}>

                </View>

            </View>
        )
    }
}

// == EXPORTS

export default Header;