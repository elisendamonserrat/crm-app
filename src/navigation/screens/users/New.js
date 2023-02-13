import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import New from "../../../features/user/New";
import usersStyles from "./styles";

const NewUserScreen = () => {
  const styles = StyleSheet.create(usersStyles());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <New />
      </ScrollView>
    </SafeAreaView>
  );
};
export default NewUserScreen;
