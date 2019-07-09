import Navigator from "./navigation/Navigator";
import React, { Component } from "react";
import Orientation, { orientation } from "react-native-orientation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import { FIREBASE_CONFIG } from "./Credentials";
import reducers from './reducers';

interface Props {}
export default class App extends Component<Props> {
  componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
