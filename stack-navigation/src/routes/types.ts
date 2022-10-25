import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationStackProps = {
  Home: undefined;
  Profile: {
    name?: string;
  };
  Search: undefined;
};

export type StackProps = NativeStackNavigationProp<NavigationStackProps>;
