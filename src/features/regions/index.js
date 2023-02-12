import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";
import Button from "../../components/Button";

const List = () => {
  const { navigate } = useNavigation();

  // Select store state that holds the regions list
  // Loop through the list

  return (
    <View>
      <Title text="Regions List" />

      <Button
        text="X Region Name"
        onPress={() => {
          navigate("Users", { region: 'test' });
        }}
        disabled={false}
      />
    </View>
  );
};

export default List;
