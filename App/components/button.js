import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';


class Button extends React.Component {
    render () {
        const { button, buttonText } = styles;
        const imageWidth = this.props.imageWidth;
        const firstColor = this.props.firstColor;
        const secondColor = this.props.secondColor;
        const textColor = this.props.textColor;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <LinearGradient colors={[firstColor,secondColor]} start={[1,1]} end={[0,0]} style={button}>
                    <Text style={[buttonText,{width: imageWidth-60, color: textColor}]}>{this.props.children}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
};

const styles ={
    button: {
        height:50,
        marginVertical: 12.5,
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        letterSpacing: 1.4,
        lineHeight: 24,
        fontSize: 12.5
    }
};

export default Button;
