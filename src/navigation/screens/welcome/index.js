import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "../../../components/Button/index";
import Spacer from "../../../components/Spacer/index";
import Title from "../../../components/Title/index";
import welcomeStyles from "./styles";

export default function Welcome() {
  const styles = StyleSheet.create(welcomeStyles());
  const { navigate } = useNavigation();

  return (
    <SafeAreaView >
      <ScrollView >
        <View style={styles.container}>
          <Spacer />

          <Title text="Welcome to the Customers Relations App" />
          <Spacer />
          <Button
            onPress={() => navigate("Regions")}
            text="See All Regions"
            disabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
