import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title/index";
import Button from "../../components/Button/index";
import { regionsList } from "../../utilities/data";
import Row from "./row";
import Spacer from "../../components/Spacer/index";

const List = () => {
  // Select store state that holds the regions list
  // Loop through the list
  const { navigate } = useNavigation();

  return (
    <View>
      <Spacer />

      <View
        style={{
          backgroundColor: "#fff",
          width: "90%",
          margin: "auto",
          paddingBottom: 15,
          paddingTop: 15,
          borderRadius: 14,
        }}
      >
        <Title text="Add a New User" />

        <Button
          text="Add a New User"
          onPress={() => navigate("Add User")}
          disabled={false}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#191A19",
          marginTop: 15,
          marginBottom: 15,
          width: "50%",
          margin: "auto",
        }}
      ></View>

      <Title text="Search a User by Region" />
      <Spacer />

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
