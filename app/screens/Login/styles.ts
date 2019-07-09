import { StyleSheet, Dimensions, ViewStyle } from "react-native";
import Colors from "../../../theme/Colors";

const screen_width = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.button_blue,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  } as ViewStyle,
  imageStyle: {
    width: screen_width,
    height: "100%",
    alignSelf: "center"
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 150
  } as ViewStyle
});

export default styles;
