import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { initialUsers, regionsList } from "../../../utilities/data";
import Row from "./row";
import { useListUsers } from "../hooks";

const List = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { regionID } = params;
  const usersList = useListUsers()

  const [usersByRegion, setUsersByRegion] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  // Select store state that holds the regions list
  // Loop through the list
  useEffect(() => {
    setUsersByRegion(() =>
      usersList.filter((user) => regionID === user.region_id)
    );
    setSelectedRegion(
      () => regionsList.filter((region) => region.id === regionID)[0]
    );
  }, [regionID]);

  return (
    <View>
      <Title text={`Users List ${selectedRegion.name}`} />
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
