import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import List from "../../../features/user/List/index";
import usersStyles from "./styles";

const ListUsersScreen = () => {
  const styles = StyleSheet.create(usersStyles());

  return (
    <SafeAreaView style={styles.container}>
        <List />
    </SafeAreaView>
  );
};

export default ListUsersScreen;
