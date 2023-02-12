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
        style={{ borderWidth: 1, padding: 10, margin: 10, borderRadius: 10 }}
      >
        <Text key={item.id}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
