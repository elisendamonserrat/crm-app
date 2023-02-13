import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Regions from "../../../features/regions/index";
import regionsStyles from "./styles";

const RegionsList = () => {
  const styles = StyleSheet.create(regionsStyles());
  return (
    <SafeAreaView style={styles.container}>
        <Regions />
    </SafeAreaView>
  );
};

export default RegionsList;
