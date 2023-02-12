import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Edit from "../../../features/user/Edit";

const EditUserScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <Edit />
    </ScrollView>
  </SafeAreaView>
);

export default EditUserScreen;
