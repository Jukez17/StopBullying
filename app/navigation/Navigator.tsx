import BurgerMenu from "../components/BurgerMenu";
//import DetailScreen from "../screens/Detail";
import HomeScreen, { strings as homeStrings } from "../screens/Home";
import LoadingScreen from "../screens/Loading";
import LoginScreen, { strings as loginStrings } from "../screens/Login";
//import OptionsScreen from "../screens/Options";
//import PasswordResetScreen from "../screens/PasswordReset";
//import RegisterScreen from "../screens/Register";
import ReportScreen, { strings as reportStrings } from "../screens/ReportForm";
import AboutScreen, { strings as aboutstrings } from "../screens/About";
import SettingsScreen, { strings as settingsStrings } from "../screens/Settings";
import React from "react";
import { Platform } from "react-native";
import { Icon } from "react-native-elements";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  NavigationScreenProps,
  NavigationTransitionProps,
  StackViewTransitionConfigs,
  TabScene,
  TransitionConfig
} from "react-navigation";

const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: NavigationTransitionProps
): TransitionConfig => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator(
  { HomeScreen },
  { initialRouteName: "HomeScreen", transitionConfig: dynamicModalTransition }
);

HomeStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel: homeStrings.homeTitle,
    tabBarIcon: ({ tintColor }: TabScene) => (
      <Icon name="ios-home" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: homeStrings.homeTitle,
    drawerIcon: ({ tintColor }: TabScene) => (
      <Icon name="md-home" type="ionicon" color={tintColor} />
    )
  };
};

const ReportStack = createStackNavigator({ ReportScreen }, { headerMode: "none" });

ReportStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 1) {
    tabBarVisible = false;
  }

  let drawerLockMode = "unlocked";
  if (navigation.state.index > 1) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel: reportStrings.reportTitle,
    tabBarIcon: ({ tintColor }: TabScene) => (
      <Icon name="ios-clipboard" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: reportStrings.reportTitle,
    drawerIcon: ({ tintColor }: TabScene) => (
      <Icon name="md-clipboard" type="ionicon" color={tintColor} />
    )
  };
};

const AboutStack = createStackNavigator({ AboutScreen }, { headerMode: "none" });
AboutStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 2) {
    tabBarVisible = false;
  }

  let drawerLockMode = "unlocked";
  if (navigation.state.index > 2) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel: aboutstrings.aboutTitle,
    tabBarIcon: ({ tintColor }: TabScene) => (
      <Icon name="ios-help-circle-outline" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: aboutstrings.aboutTitle,
    drawerIcon: ({ tintColor }: TabScene) => (
      <Icon name="md-help-circle-outline" type="ionicon" color={tintColor} />
    )
  };
};

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
  tabBarLabel: settingsStrings.settingsTitle,
  tabBarIcon: ({ tintColor }: TabScene) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
  drawerLabel: settingsStrings.settingsTitle,
  drawerIcon: ({ tintColor }: TabScene) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
  android: createDrawerNavigator({ HomeStack, SettingsStack }, { contentComponent: BurgerMenu })
});

const LoginStack = createStackNavigator({ LoginScreen }, { headerMode: "none" });

/* LoginStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: loginStrings.loginTitle,
    tabBarIcon: ({ tintColor }: TabScene) => {
      let iconName = Platform.select({ ios: "ios-log-in", android: "md-log-in" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible
  };
}; */

const AuthTabs = createStackNavigator({ LoginStack }, { headerMode: "none" });

const HomeTabs = createBottomTabNavigator({ HomeStack, ReportScreen, AboutScreen })

const RootSwitch = createSwitchNavigator({ LoadingScreen, AuthTabs, HomeTabs, MainNavigator });

export default RootSwitch;
