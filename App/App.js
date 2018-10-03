import React from 'react';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Login from './screens/Login';
import ReduxThunk from 'redux-thunk';


class App extends React.Component{
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
    const store=createStore(reducers, {},applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Login />
      </Provider>

    );
  }
};

export default App;
