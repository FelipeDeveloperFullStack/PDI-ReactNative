import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StackProps } from "../../../routes/types";
import { Style } from "./style";
import { ButtonProps, NavigationType } from "./type";

const Button: React.FC<ButtonProps> = ({ label, navigationType, isGoBack }) => {
  const navigation = useNavigation<StackProps>();

  const defineNavigationName = (navigationType: NavigationType) => {
    switch (navigationType) {
      case "Home": {
        return navigation.navigate(navigationType);
      }
      case "Profile": {
        return navigation.navigate("Profile", { name: navigationType });
      }
      case "Search": {
        return navigation.navigate("Search");
      }
    }
  };

  return (
    <TouchableOpacity
      style={Style.container}
      onPress={() =>
        isGoBack ? navigation.goBack() : defineNavigationName(navigationType)
      }
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
