import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

export default class App extends React.Component{
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDg8UuMvPpHNZ86GqBid_aJJnyfWe4tiXg',
      authDomain: 'authentication-73.firebaseapp.com',
      databaseURL: 'https://authentication-73.firebaseio.com',
      projectId: 'authentication-73',
      storageBucket: 'authentication-73.appspot.com',
      messagingSenderId: '715611943987'
    };
    firebase.initializeApp(config);
  }
  render(){
    return(
      <Provider store={createStore(reducers)}>
       <View style={styles.container}>
        <Text> Welcome </Text>
       </View>
      </Provider>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
