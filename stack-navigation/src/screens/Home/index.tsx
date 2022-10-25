import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { Style } from "../style";

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>Home</Text>
      <Button label="Profile" navigationType="Profile" />
      <Button label="Search" navigationType="Search" />
    </View>
  );
};

export default Home;
