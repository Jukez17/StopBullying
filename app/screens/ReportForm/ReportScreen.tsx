import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Linking,
  ScrollView,
  Picker,
  TextInput,
  ActivityIndicator
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Button } from "../../components/Common/Button";
import Colors from "../../../theme/Colors";

class ReportScreen extends Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({});

  constructor(props: any) {
    super(props);
    this.state = {
      selectedItems: []
    };
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems }, () => {
      console.log(this.state.selectedItems);
    });
  };

  items = [
    {
      id: "1",
      name: "Uhkailu"
    },
    {
      id: "2",
      name: "Fyysinen väkivalta"
    },
    {
      id: "3",
      name: "Epäsopiva koskettelu"
    },
    {
      id: "4",
      name: "Tavaroiden varastaminen/rikkominen"
    },
    {
      id: "5",
      name: "Nettikiusaaminen"
    },
    {
      id: "6",
      name: "Pahantahtoisuus"
    },
    {
      id: "7",
      name: "Ivaaminen"
    },
    {
      id: "8",
      name: "Rasistinen käytös"
    },
    {
      id: "9",
      name: "Porukasta eristäminen"
    },
    {
      id: "10",
      name: "Muu"
    }
  ];

  onButtonPress() {

    const reportNumber = Math.floor(Math.random() * 20000) + 1
    const {school, behaviour, description, date } = this.props

    this.props.reportCreate({
      school: school || 'Maikkulan yläaste',
      behaviour,
      description,
      reportNumber: reportNumber,
      date: firebase.database.ServerValue.TIMESTAMP,
      selectedItems: this.state.selectedItems
    })
  }


  renderButton() {
    return (
      <Button 
        title="Lähetä"
        size={"big"}
        type={"about"}
        onPress={() => this.onButtonPress.bind(this)}
      />
    )
  }


  render() {
    const {
      container,
      backgroundStyle,
      textStyle,
      textAreaStyle,
      card
    } = styles;
    return (
      <ImageBackground
        source={require("../../assets/images/backgroundtwo.jpg")}
        style={backgroundStyle}
      >
        <ScrollView contentContainerStyle={viewContainer}>
          <View>
            <View style={schoolPickerStyle}>
              <Text style={pickerTextStyle}>Koulun nimi: </Text>
              <Picker
                selectedValue={this.props.school}
                onValueChange={value =>
                  this.props.reportUpdate({ prop: "school", value })
                }
              >
                <Picker.Item label="Valitse .." />
                <Picker.Item
                  label="Maikkulan yläaste"
                  value="Maikkulan yläaste"
                />
                <Picker.Item
                  label="Teuvo pakkalan ala-aste"
                  value="Teuvo pakkalan ala-aste"
                />
              </Picker>
            </View>
            <View style={behaviourPickerStyle}>
              <Text style={pickerTextStyle}>Kiusaamistavat: </Text>
              <MultiSelect
                items={this.items}
                uniqueKey="name"
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={this.state.selectedItems}
                selectText="Valitse .."
                altFontFamily="ProximaNova-Light"
                tagRemoveIconColor={Colors.black}
                tagBorderColor="#333"
                tagTextColor="#333"
                selectedItemTextColor="#333"
                selectedItemIconColor="#333"
                itemTextColor="#333"
                displayKey="name"
                submitButtonColor="#333"
                submitButtonText="Lisää"
              />
            </View>
            <View style={descriptionStyle}>
              <Text style={textBoxStyle}>Mitä tapahtui ? </Text>
              <TextInput
                value={this.props.description}
                onChangeText={value =>
                  this.props.reportUpdate({ prop: "description", value })
                }
                style={inputTextBoxStyle}
                placeholder="Kerro mahdollisimman tarkkaan mitä tapahtui..."
                multiline={true}
                maxLength={500}
              />
            </View>
          </View>
          <View style={buttonContainer}>
            <View>{this.renderPictureButton()}</View>
            {/*          <View>
          <Image source={data.uri} />
        </View> */}
            <View>{this.renderButton()}</View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default ReportScreen;
