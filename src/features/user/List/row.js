import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";

const Row = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <View>
      <View
        key={item.id}
        style={{
          borderWidth: 1,
          borderColor: "rgb(128, 128, 128);",
          borderRadius: 10,
          padding: 15,
          paddingLeft: 20,
          margin: "auto",
          marginBottom: 10,
          width: "90%",
        }}
      >
        <Text key={"id"}>ID: {item.id}</Text>
        <Text key={"fn"}>Name: {item.name}</Text>
        <Text key={"ln"}>Last Name: {item.lastName}</Text>
        <Text key={"np"}>Is Active: {item.active}</Text>
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
