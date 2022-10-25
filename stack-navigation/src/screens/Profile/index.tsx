import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { Style } from "../style";

type Props = {};

const Profile = (props: Props) => {
  const navigationRoute = useRoute();

  return (
    <View style={Style.container}>
      <Text style={Style.text}>Profile</Text>
      <Button label="Home" navigationType="Home" />
      <Button label="Search" navigationType="Search" />
      <Button label="Back" isGoBack />
    </View>
  );
};

export default Profile;
