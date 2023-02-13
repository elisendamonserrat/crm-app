import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import ContactUser from "../../../features/user/ContactUser/index.js";
import usersStyles from "./styles";

const EditUserScreen = () => {
  const styles = StyleSheet.create(usersStyles());

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ContactUser />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditUserScreen;
