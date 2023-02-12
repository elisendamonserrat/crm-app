import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";
import Button from "../../components/Button";
import { regionsList } from "../../utilities/data";
import Row from "./row";

const List = () => {
  // Select store state that holds the regions list
  // Loop through the list
  const { navigate } = useNavigation();

  return (
    <View>
      <Title text="Add a New User" />

      <Button
        text="Add a New User"
        onPress={() => navigate('Add User')}
        disabled={false}
      />

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginTop: 15,
          marginBottom: 15,
        }}
      />

      <Title text="Regions List" />

      {regionsList && regionsList.length > 0 ? (
        <FlatList
          data={regionsList || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No Regions Available"}</Text>
          <Button
            text="Add a New Region"
            onPress={() => console.log("To be implemented: add new regionss")}
            disabled={false}
          />
        </>
      )}
    </View>
  );
};

export default List;
