import React, { Component } from "react";
import {
  Text,
  StyleProp,
  TextStyle,
  StyleSheet,
  ViewStyle,
  Dimensions
} from "react-native";
import Colors from "../../../theme/Colors";
import { Touchable } from "./Touchable";

interface Props {
  style?: StyleProp<ViewStyle>;
  type: ButtonTypes;
  size: ButtonSizes;
  title: string;
  selected?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export type ButtonTypes =
  | "login"
  | "signup"
  | "resetPass"
  | "primary"
  | "destruct"
  | "about"  

export type ButtonSizes = "small" | "normal" | "medium" | "big";

const SCREEN_WIDTH = Dimensions.get("window").width;

export class Button extends Component<Props> {
  static defaultProps = {
    type: "primary",
    size: "normal"
  };

  render() {
    const { style, title, disabled, onPress } = this.props;
    const { buttonDisabled } = styles;
    return (
      <Touchable
        style={[this.buttonStyle(), style]}
        disabledStyle={buttonDisabled}
        pressedStyle={this.pressedStyle()}
        disabled={disabled}
        onPress={onPress}
      >
        {pressed => (
          <Text style={this.titleStyle(pressed)} numberOfLines={2}>
            {title}
          </Text>
        )}
      </Touchable>
    );
  }

  buttonStyle() {
    const { type, size, selected } = this.props;
    const {
      button,
      buttonPressed,
      loginButton,
      signUpButton,
      resetPassButton,
      primaryButton,
      buttonDestruct,
      destructButton,
      aboutButton,
      smallButton,
      normalButton,
      mediumButton,
      bigButton
    } = styles;
    let style: StyleProp<ViewStyle>[] = [button];

    switch (type) {
      case "login":
        style.push(selected ? buttonPressed : loginButton);
        break;
      case "signup":
        style.push(selected ? buttonPressed : signUpButton);
        break;
      case "resetPass":
        style.push(selected ? buttonPressed : resetPassButton);
        break;
      case "primary":
        style.push(selected ? buttonPressed : primaryButton);
        break;
      case "destruct":
        style.push(selected ? buttonDestruct : destructButton);
        break;
      case "about":
        style.push(selected ? buttonPressed : aboutButton);
        break;
    }

    switch (size) {
      case "small": {
        style.push(smallButton);
        break;
      }
      case "normal": {
        style.push(normalButton);
        break;
      }
      case "medium": {
        style.push(mediumButton);
        break;
      }
      case "big": {
        style.push(bigButton);
        break;
      }
    }

    return style;
  }

  pressedStyle() {
    const { type, selected } = this.props;
    const {
      loginButton,
      signUpButton,
      resetPassButton,
      primaryButton,
      buttonPressed,
      buttonDestruct,
      aboutButton,
      destructButton
    } = styles;
    let style: StyleProp<ViewStyle>[] = [];

    switch (type) {
      case "login": {
        style.push(selected ? loginButton : buttonPressed);
        break;
      }
      case "signup": {
        style.push(selected ? signUpButton : buttonPressed);
        break;
      }
      case "resetPass": {
        style.push(selected ? resetPassButton : buttonPressed);
        break;
      }
      case "primary": {
        style.push(selected ? primaryButton : buttonPressed);
        break;
      }
      case "destruct": {
        style.push(selected ? destructButton : buttonDestruct);
        break;
      }
      case "about": {
        style.push(selected ? aboutButton : buttonPressed);
        break;
      }
    }
    return style;
  }

  titleStyle(pressed: boolean) {
    const { type, size, selected } = this.props;
    const {
      title,
      loginTitle,
      signUpTitle,
      resetPassTitle,
      primaryTitle,
      destructTitle,
      aboutTitle,
      smallTitle,
      normalTitle,
      mediumTitle,
      bigTitle
    } = styles;
    let style: StyleProp<ViewStyle>[] = [title];

    switch (type) {
      case "login":
        style.push(loginTitle);
        break;
      case "signup":
        style.push(signUpTitle);
        break;
      case "resetPass":
        style.push(resetPassTitle);
        break;
      case "primary":
        style.push(primaryTitle);
        break;
      case "destruct":
        style.push(
          selected
            ? pressed
              ? destructTitle
              : primaryTitle
            : pressed
            ? primaryTitle
            : destructTitle
        );
        break;
      case "about":
        style.push(aboutTitle);
        break;
    }

    switch (size) {
      case "small": {
        style.push(smallTitle);
        break;
      }
      case "normal": {
        style.push(normalTitle);
        break;
      }
      case "medium": {
        style.push(mediumTitle);
        break;
      }
      case "big": {
        style.push(bigTitle);
        break;
      }
    }

    return style;
  }
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20
  } as ViewStyle,
  loginButton: {
    backgroundColor: Colors.button_white_90,
    borderColor: Colors.black,
    borderWidth: 3,
    borderRadius: 22
  } as ViewStyle,
  signUpButton: {
    backgroundColor: Colors.button_white_90
  } as ViewStyle,
  resetPassButton: {
    backgroundColor: Colors.button_white_90
  } as ViewStyle,
  primaryButton: {
    backgroundColor: Colors.button_blue
  } as ViewStyle,
  destructButton: {
    backgroundColor: "#0000"
  } as ViewStyle,
  buttonDestruct: {
    backgroundColor: "#645"
  } as ViewStyle,
  aboutButton: {
    backgroundColor: Colors.button_white_90,
    width: 240,
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 5
  } as ViewStyle,
  smallButton: {
    height: 44,
    borderRadius: 22
  } as ViewStyle,
  normalButton: {
    height: 50,
    borderRadius: 50 / 2
  } as ViewStyle,
  mediumButton: {
    height: 70,
    borderRadius: 70 / 6
  } as ViewStyle,
  bigButton: {
    width: SCREEN_WIDTH - 30,
    height: 60,
    marginLeft: 1
  } as ViewStyle,
  buttonDisabled: {
    opacity: 0.5
  } as ViewStyle,
  buttonDefault: {
    backgroundColor: Colors.button_blue
  } as ViewStyle,
  buttonPressed: {
    backgroundColor: "#233"
  } as ViewStyle,
  title: {
    textAlign: "center"
  } as TextStyle,
  loginTitle: {
    color: Colors.buttonTitle_black,
    fontWeight: "bold"
  } as TextStyle,
  signUpTitle: {
    color: Colors.buttonTitle_green,
    fontWeight: "bold"
  } as TextStyle,
  resetPassTitle: {
    color: Colors.buttonTitle_green,
    fontWeight: "bold"
  } as TextStyle,
  aboutTitle: {
    color: Colors.black,
    fontSize: 26,
    fontWeight: "bold"
  } as TextStyle,
  primaryTitle: {
    color: "#fff"
  } as TextStyle,
  destructTitle: {
    color: "red"
  } as TextStyle,
  smallTitle: {
    fontSize: 12
  } as TextStyle,
  normalTitle: {
    fontSize: 14
  } as TextStyle,
  mediumTitle: {
    fontSize: 16
  } as TextStyle,
  bigTitle: {
    fontSize: 18
  } as TextStyle
});
