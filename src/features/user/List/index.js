import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { regionsList } from "../../../utilities/data";
import Row from "./row";
import { useListUsers, useListUsersStatus, useErrorMessages } from "../hooks";
import Spacer from "../../../components/Spacer";
import { PENDING, SUCCESS } from "../../../utilities/helpers";
import Loading from "../../../components/Loading";

const List = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { regionID } = params;
  const usersList = useListUsers();
  const { status, setStatus } = useListUsersStatus();
  const { error, setError } = useErrorMessages();

  useEffect(() => {
    setTimeout(() => setStatus(SUCCESS), 500);

    return () => setStatus(PENDING);
  }, []);

  let usersByRegion = usersList.filter((user) => regionID === user.region_id);
  const selectedRegion = regionsList.filter(
    (region) => region.id === regionID
  )[0];

  return (
    <View>
      <Spacer />
      <Title text={`Users List ${selectedRegion.name}`} />
      <Spacer />
      {status === PENDING ? (
        <Loading />
      ) : usersByRegion && usersByRegion.length > 0 ? (
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
      {error !== "" && <Text style={{ color: "red" }}>Error: {error}</Text>}
    </View>
  );
};

export default List;
