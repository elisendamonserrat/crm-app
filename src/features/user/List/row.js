import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";

const Row = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <View>
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"id"}>ID: {item.id}</Text>
        <Text key={"fn"}>Name: {item.name}</Text>
        <Text key={"ln"}>Last Name: {item.lastName}</Text>
        <Text key={"np"}>Is Active: {item.active ? "Yes" : "No"}</Text>
        <Button
          text="Edit User"
          onPress={() => {
            navigate("Edit User", { userID: item.id });
          }}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default Row;
