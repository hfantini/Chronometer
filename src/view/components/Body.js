import React, {Component} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import moment from "moment";

// == STYLES

let style = StyleSheet.create(
    {
        container:
        {
            width: "100%",
        },
        containerImage:
        {
            alignItems: "center",
            justifyContent: "center",
            image:
            {
                width: 210,
                height: 250,
            }
        },
        containerDigits:
        {
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",

            text:
            {
                color: "#FF6A00",
                fontSize: 48,
                fontWeight: "bold"
            }
        },
        containerControls:
        {
            marginLeft: 30,
            marginRight: 30,
            marginTop: 50,
            height: 40,
            flexDirection: "row",

            containerLeft:
            {
                flex: 1,
                marginRight: 10,
            },

            containerRight:
            {
                flex: 1,
                marginLeft: 10,
            }
        },

        button:
        {
            height: 60,
            borderColor: "#FF6A00",
            borderWidth: 4,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",

            text:
            {
                color: "#FF6A00",
                fontSize: 18,
                fontWeight: "bold"
            }
        },

        buttonDisabled:
        {
            height: 60,
            borderColor: "#FF6A00",
            borderWidth: 4,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.3,

            text:
            {
                color: "#FF6A00",
                fontSize: 18,
                fontWeight: "bold"
            }
        }
    }
)

// == COMPOMENT

class Body extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            running: false,
            timer: "00:00:00"
        }

        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onReset = this.onReset.bind(this);

        this.timerId = null;
        this.startTime = null;
        this.accumulatedTime = 0;
    }

    onUpdate()
    {
        let value = new Date().getTime() - this.startTime;
        value += this.accumulatedTime;

        value = moment("1970-01-01 00:00:00").add(value).format("mm:ss:SSS");
        
        this.setState(
            {
                timer: value
            }
        );
    }

    onStart()
    {
        if(this.timerId != null)
        {
            return;
        }

        this.setState(
            {
                running: true
            }
        )

        this.startTime = new Date().getTime();
        this.timerId = setInterval(() => 
        {
            this.onUpdate(); 
        }, 1);
    }

    onStop()
    {
        this.setState(
            {
                running: false
            }
        )

        clearInterval(this.timerId);

        this.accumulatedTime += new Date().getTime() - this.startTime;
        this.timerId = null;
    }

    onReset()
    {
        if(this.state.running)
        {
            return;
        }

        this.startTime = null;
        this.accumulatedTime = 0;
        this.setState(
            {
                timer: "00:00:00"
            }
        )
    }

    render()
    {
        return(

            <View style={style.container}>

                <View style={style.containerImage}>

                    <Image style={style.containerImage.image} 
                           source={require("../../assets/stopwatch.png")}
                        
                    />

                </View>

                <View style={style.containerDigits}>

                    <Text style={style.containerDigits.text}>
                        {this.state.timer}
                    </Text>

                </View>

                <View style={style.containerControls}>

                    <View style={style.containerControls.containerLeft}>

                        <TouchableOpacity onPress={ () => { this.onReset() } }>
                            
                            <View style={ (!this.state.running ? style.button : style.buttonDisabled) }>
                                <Text style={style.button.text}>RESET</Text>
                            </View>
                            
                        </TouchableOpacity>

                    </View>

                    <View style={style.containerControls.containerRight}>

                        <TouchableOpacity onPress={ () => { (!this.state.running ? this.onStart() : this.onStop() ) } }>
                            
                            <View style={ [style.button] }>
                                <Text style={style.button.text}> {(!this.state.running ? "START" : "STOP")} </Text>
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        )
    };
}

// == EXPORTS

export default Body;