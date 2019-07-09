import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ImageBackground, Linking } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Button } from "../../components/Common/Button"

class AboutScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({});

  render() {
    const { container, backgroundStyle, textStyle, textAreaStyle, card } = styles;
    return (
      <ImageBackground
        source={require("../../../assets/images/backgroundtwo.jpg")}
        style={backgroundStyle}
      >
        <View style={container}>
          <View style={card}>
            <Text style={textStyle}>
              StopBullying is a free, simple and anti-bullying app that allows
              and empowers bullying victims and bystanders to send Anonymous
              report through mobile device.
            </Text>
            <Text style={textAreaStyle}>How does it work?</Text>
            <Text style={textStyle}>
              Student-generated reports are automatically forwarded to
              designated school adminstrators, via StopBullying Pro app. Filling
              the name of your school (or victim), incident time, description of
              what happened and select type of bullyings. Attached recordings
              and images are available.
            </Text>
            <Button
              title="Check Website"
              //size={"medium"}
              type={"about"}
              onPress={() => Linking.openURL("http://165.227.135.170/")}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default AboutScreen;
