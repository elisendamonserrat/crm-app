import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import List from "../../../features/user/List";
import usersStyles from "./styles";

const ListUsersScreen = () => {
  const styles = StyleSheet.create(usersStyles());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <List />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListUsersScreen;
