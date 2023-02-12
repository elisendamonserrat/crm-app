import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import Spacer from "../../../components/Spacer";
import { View, TextInput } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import formStyles from "./styles";
import { regionsList } from "../../../utilities/data";

const Form = ({ handleSubmit, status, userID = null, title }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  const [selected, setSelected] = React.useState("");

  //   const { fields, setFormField } = useUpdateFields(animalID);

  //   const { common_name, scientific_name } = fields;

  //   const onSubmit = () => {
  //     handleSubmit();
  //     navigate("Users");
  //   };

  const regionsListFormatted = regionsList.map((region) => ({
    key: region.id,
    value: region.name,
  }));

  const isUserActive = [
    { key: 1, value: "Yes" },
    { key: 2, value: "No" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Title text={title} />
        <Spacer />

        <TextInput
          key={"name"}
          placeholder={"name"}
          value={""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => console.log("name", v)}
        />

        <Spacer />

        <TextInput
          key={"lastName"}
          placeholder={"Last Name"}
          value={""}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => console.log("lastName", v)}
        />

        <Spacer />

        <SelectList
          setSelected={(val) => console.log("val", val)}
          data={regionsListFormatted}
          save="key"
          placeholder="Select a Region"
          // TO UPDATE THE DEFAULT KEY
          defaultOption={
            userID
              ? {
                  key: "34d1e800-aaa9-11ed-9017-1b0f7a30ae2f",
                  value: "North East",
                }
              : {}
          }
        />

        <Spacer />

        <SelectList
          setSelected={(val) => console.log("val", val)}
          data={isUserActive}
          save="value"
          placeholder="Is user active?"
          // TO UPDATE THE DEFAULT KEY
          defaultOption={
            userID
              ? {
                  key: "1",
                  value: true,
                }
              : {}
          }
          search={false}
        />

        <Spacer />

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
