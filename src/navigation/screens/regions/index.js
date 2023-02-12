import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Regions from "../../../features/regions";

// top level display component only - declares a view that will be part of navigation
const RegionsList = () => (
  <SafeAreaView>
    <ScrollView>
      <Regions />
    </ScrollView>
  </SafeAreaView>
);

export default RegionsList;
