import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import List from "../../../features/user/List";

// top level display component only - declares a view that will be part of navigation
const ListUsersScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
);

export default ListUsersScreen;
