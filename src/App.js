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
            apiKey: "AIzaSyAgqdEXCb0jcAITUZ9kVz9MZ4OFU9t-LkM",
            authDomain: "manager-8f1b9.firebaseapp.com",
            databaseURL: "https://manager-8f1b9.firebaseio.com",
            projectId: "manager-8f1b9",
            storageBucket: "manager-8f1b9.appspot.com",
            messagingSenderId: "970703805883",
            appId: "1:970703805883:web:b9745f206eee784408f89e"
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