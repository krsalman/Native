import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

class Header extends React.Component {
    render () {
        const headerText = this.props.headerText;
        const leftButton = this.props.leftButton;
        const rightButton = this.props.rightButton;
        const secondRightButton = this.props.secondRightButton;
        const transparentHeader = this.props.transparentHeader ? 'transparent' : '#FFFFFF';
        const headerSize = this.props.secondRightButton ? 182.5 : 132.5;
        const headerPadding = this.props.secondRightButton ? this.props.noCenterTitle ? 0 : 50 : 0;
        return (
            <View style={[styles.header, {width: imageWidth, backgroundColor: transparentHeader}]}>
                {leftButton}
                <View style={{height: 50, alignItems: 'center', paddingLeft: headerPadding, width: (imageWidth-headerSize), justifyContent: 'center'}}>
                    <Text style={styles.headerText} ellipsizeMode={'tail'} numberOfLines={1}>{headerText}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 8.75}}>
                    {secondRightButton}
                    {rightButton}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    headerText: {
        color: 'rgb(19,19,21)',
        textAlign: 'right',
        fontSize: 14,
        lineHeight: 13,
        height: 13,
        letterSpacing: 1.4,
    },
    headerIcon: {
      width: 17.5,
      height: 17.5,
        resizeMode: 'contain'
    },
    header: {
        top: 0,
        alignSelf: 'stretch',
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        borderBottomWidth: 1

    }
});

export default Header;
