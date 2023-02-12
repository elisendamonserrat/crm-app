import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useUpdateFields } from "../hooks";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../../utilities/helpers";
import Button from "../../../components/Button";
import formStyles from "./styles";

const Form = ({ handleSubmit, status, animalID, title }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  //   const { fields, setFormField } = useUpdateFields(animalID);

  //   const { common_name, scientific_name } = fields;

  //   const onSubmit = () => {
  //     handleSubmit();
  //     navigate("Users");
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Title text={title} />

        <TextInput
          key={"common_name"}
          placeholder={common_name || "Common Name"}
          value={common_name || ""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => console.log("common_name", v)}
        />

        <View style={{ height: 15, width: "100%" }}></View>

        <TextInput
          key={"scientific_name"}
          placeholder={scientific_name || "Scientific Name"}
          value={scientific_name || ""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => console.log("scientific_name", v)}
        />
        <Button text="Submit" />
        {/* 
        <Button
          onPress={onSubmit}
          text="Submit"
          disabled={status !== PENDING && status !== INPROGRESS}
        /> */}
      </View>
    </View>
  );
};

export default Form;
