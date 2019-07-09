import { StyleSheet, Dimensions, ViewStyle, TextStyle } from "react-native";
import Colors from "../../../theme/Colors";

const screen_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.button_blue,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  } as ViewStyle,
  imageStyle: {
    width: screen_width,
    height: "100%",
    alignSelf: "center"
  },
  backgroundStyle: {
    width: "100%",
    height: "100%"
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 150
  } as ViewStyle,
  card: {
    backgroundColor: Colors.white,
    alignSelf: "center",
    height: "auto",
    marginLeft: 15,
    marginRight: 15,
    borderColor: Colors.black,
    borderWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  } as ViewStyle,
  textStyle: {
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    textAlign: "justify",
    margin: 20,
    marginLeft: 8,
    marginRight: 10,
    marginBottom: 20,
    padding: 10
  } as TextStyle,
  textAreaStyle: {
    fontSize: 22,
    color: "#333",
    textAlign: "center",
    alignSelf: "center",
    padding: 5,
    backgroundColor: "#fff",
    borderBottomWidth: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 230,
    height: 40
  } as TextStyle
});

export default styles;
