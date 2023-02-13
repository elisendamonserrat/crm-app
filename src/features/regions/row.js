import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Row = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate("Users By Region", { regionID: item.id })}
    >
      <View
        key={item.id}
        style={{
          borderWidth: 1,
          borderColor: "rgb(128, 128, 128);",
          borderRadius: 10,
          padding: 15,
          paddingLeft: 20,
          margin: 'auto',
          marginBottom: 10,
          width:"90%"
        }}
      >
        <Text key={item.id}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
