import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Button from "../../../components/Button";
import Title from "../../../components/Title";

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
          placeholder={"Common Name"}
          value={""}
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
          placeholder={"Scientific Name"}
          value={""}
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
