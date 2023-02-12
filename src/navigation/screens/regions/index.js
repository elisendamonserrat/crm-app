import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import List from "../../../features/regions";

// top level display component only - declares a view that will be part of navigation
const RegionsList = () => (
  <SafeAreaView>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
);

export default RegionsList;
