/** Here information to navigation */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Profile, Search } from "../../screens";
import { NavigationStackProps } from "../types";

const { Navigator, Screen } =
  createNativeStackNavigator<NavigationStackProps>();

const Stack = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default Stack;
