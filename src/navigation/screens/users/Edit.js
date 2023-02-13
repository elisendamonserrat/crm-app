import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Edit from "../../../features/user/Edit";
import usersStyles from "./styles";

const EditUserScreen = () => {
  const styles = StyleSheet.create(usersStyles());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Edit />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditUserScreen;
