import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { regionsList } from "../../../utilities/data";
import Row from "./row";
import { useListUsers } from "../hooks";
import Spacer from "../../../components/Spacer";

const List = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { regionID } = params;
  const usersList = useListUsers();

  let usersByRegion = usersList.filter((user) => regionID === user.region_id);
  const selectedRegion = regionsList.filter(
    (region) => region.id === regionID
  )[0];

  return (
    <View>
      <Spacer />
      <Title text={`Users List ${selectedRegion.name}`} />
      <Spacer />
      {usersByRegion && usersByRegion.length > 0 ? (
        <FlatList
          data={usersByRegion || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No users for this region available yet!"}</Text>
          <Button
            text="Add User"
            onPress={() => {
              navigate("Add User");
            }}
            disabled={false}
          />
        </>
      )}
    </View>
  );
};

export default List;
