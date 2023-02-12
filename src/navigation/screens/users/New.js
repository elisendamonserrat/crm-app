import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import New from "../../../features/user/New";

// top level display component only - declares a view that will be part of navigation
const NewUserScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New />
    </ScrollView>
  </SafeAreaView>
);

export default NewUserScreen;
