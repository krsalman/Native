import React from 'react';
import {Text, View ,StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged,loginUser } from '../actions';
import Header from '../components/Header';
import Button from '../components/button';
import BlurInput from '../components/blurinput';


const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width - 150) * 9 / 16);
const imageWidth = dimensions.width;


class Login extends React.Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {email,password} = this.props;
    this.props.loginUser({email,password});
  }

  renderError() {
    if(this.props.error){
      return(
        <View style={{ backgroundColor:'white'}}>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      )
    }
  }
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Header headerText="LOGIN FORM" />
          <View style={styles.content}>
                <BlurInput onChangeText={this.onEmailChange.bind(this)} value={this.props.email} tint={"dark"} intensity={80} imageWidth={imageWidth} placeholder={"Your email"} textContentType={"emailAddress"} placeholderTextColor={'rgba(255,255,255,0.4)'}></BlurInput>
                <BlurInput onChangeText={this.onPasswordChange.bind(this)} tint={"dark"} intensity={80} imageWidth={imageWidth} placeholder={"Your password"} secureTextEntry={true} placeholderTextColor={'rgba(255,255,255,0.4)'}></BlurInput>
                <Button  onPress={this.onButtonPress.bind(this)} firstColor={"#A573FF"} secondColor={"#645AFF"} textColor={"#FFFFFF"} imageWidth={imageWidth}>LOGIN</Button>
                {this.renderError()}
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
            },
    renderError:{
      fontSize : 20,
      alignSelf: 'center',
      color:'red'
    }
  });

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged ,passwordChanged,loginUser})(Login);
