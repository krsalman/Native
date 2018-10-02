import React from 'react';
import {Text, View ,StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import Header from '../components/Header';
import Button from '../components/button';
import BlurInput from '../components/blurinput';


const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width - 150) * 9 / 16);
const imageWidth = dimensions.width;


class Login extends React.Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Header headerText="LOGIN FORM" />
          <View style={styles.content}>
                <BlurInput tint={"dark"} intensity={80} imageWidth={imageWidth} placeholder={"Your email"} textContentType={"emailAddress"} placeholderTextColor={'rgba(255,255,255,0.4)'}></BlurInput>
                <BlurInput tint={"dark"} intensity={80} imageWidth={imageWidth} placeholder={"Your password"} secureTextEntry={true} placeholderTextColor={'rgba(255,255,255,0.4)'}></BlurInput>
                <Button  firstColor={"#A573FF"} secondColor={"#645AFF"} textColor={"#FFFFFF"} imageWidth={imageWidth}>SIGN IN</Button>
          </View>
      </SafeAreaView>

              );
          }
      };

const styles = StyleSheet.create({
        container: {
            backgroundColor: 'transparent',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
            paddingRight: 20,
            paddingLeft: 20,
            flexDirection: 'column'
          },

            content: {
              flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
  });

export default Login;
