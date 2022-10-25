import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { Style } from "../style";

type Props = {};

const Search = (props: Props) => {
  return (
    <View style={Style.container}>
      <Text style={Style.text}>Search</Text>
      <Button label="Profile" navigationType="Profile" />
      <Button label="Home" navigationType="Home" />
      <Button label="Back" isGoBack />
    </View>
  );
};

export default Search;
