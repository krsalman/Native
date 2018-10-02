import React from 'react';
import { TextInput } from 'react-native';
import { BlurView } from 'expo';


class BlurInput extends React.Component {
    render () {
        const { button, buttonText } = styles;
        const imageWidth = this.props.imageWidth;
        const tint = this.props.tint;
        const intensity = this.props.intensity;
        const placeholder = this.props.placeholder;
        const placeholderTextColor = this.props.placeholderTextColor;
        const textContentType = this.props.textContentType ? this.props.textContentType : 'none';
        const secureTextEntry = !!this.props.secureTextEntry;
        return (
            <BlurView tint={tint} intensity={intensity} style={styles.blurButton}>
                <TextInput value={this.props.value} onChangeText={this.props.onChangeText} style={[buttonText,{width: imageWidth-60}]} textContentType={textContentType} placeholder={placeholder} secureTextEntry={secureTextEntry} placeholderTextColor={placeholderTextColor}>{this.props.children}</TextInput>
            </BlurView>
        );
    }
};

const styles ={
    blurButton: {
        height:55,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonText: {
        paddingTop: 21.5,
        paddingBottom: 21,
        textAlign: 'left',
        color: '#FFFFFF',
        letterSpacing: 0.2,
        fontSize: 13.5,
        lineHeight: 15,
        height: 55,
        paddingRight: 70,
        paddingLeft: 25
    }
};

export default BlurInput;
