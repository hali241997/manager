import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
    componentDidMount() {
        var firebaseConfig = {
            apiKey: "key",
            authDomain: "domain",
            databaseURL: "url",
            projectId: "id",
            storageBucket: "bucket",
            messagingSenderId: "id",
            appId: "id"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App
