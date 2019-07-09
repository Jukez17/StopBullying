import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import firebase from "firebase";
import { Button } from "../../components/Common/Button";

class LoginScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {};

  constructor(props: any) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  private anonymousLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true
        });
        ToastAndroid.show("Kirjauduttu sisään", ToastAndroid.SHORT);
      })
      .then(() => {
        firebase.auth().onAuthStateChanged(User => {
          if (User) {
            this.props.navigation.navigate("HomeScreen");
          }
        });
      });
  };

  /*   public renderEnterButton() {
    if (this.props.loading) {
        return <ActivityIndicator size="large" />
    }
    return (
      <Button
      title="Enter"
      size={"big"}
      type={"login"}
      onPress={() => this.anonymousLogin()}
    />
    )
} */

  render() {
    const { container, imageStyle, buttonContainer } = styles;
    return (
      <View style={container}>
        <ImageBackground
          style={imageStyle}
          source={require("../../../assets/images/loginbackground.png")}
        >
          <View style={buttonContainer}>
            <Button
              title="Enter"
              size={"big"}
              type={"login"}
              onPress={() => this.anonymousLogin()}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;
