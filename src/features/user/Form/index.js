import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../../utilities/helpers";
import Spacer from "../../../components/Spacer";
import { View, TextInput } from "react-native";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import formStyles from "./styles";
import { regionsList } from "../../../utilities/data";
import { useUpdateFields } from "../hooks";

const Form = ({ handleSubmit, status, userID = null, title }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(userID);

  const { name, lastName, active, region_id } = fields;

  console.log("form fields", fields);

  const onSubmit = () => {
    // handleSubmit();
    navigate("Users By Region", { regionID: region_id });
  };

  const regionsListFormatted = regionsList.map((region) => ({
    key: region.id,
    value: region.name,
  }));

  const isUserActive = [
    { key: 1, value: "Yes" },
    { key: 2, value: "No" },
  ];
  const isSelectedUserActive = userID
    ? isUserActive.filter((user) => user.value === active)[0]
    : {};
  const regionSelectedUser = userID
    ? regionsListFormatted.filter((user) => user.key === region_id)[0]
    : {};
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Title text={title} />
        <Spacer />

        <TextInput
          key={"name"}
          placeholder={name || "name"}
          value={name}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            padding: 15,
          }}
          onChangeText={(v) => setFormField("name", v)}
        />

        <Spacer />

        <TextInput
          key={"lastName"}
          placeholder={lastName || "lastName"}
          value={lastName}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            padding: 15,
          }}
          onChangeText={(v) => setFormField("lastName", v)}
        />

        <Spacer />

        <SelectList
          setSelected={(v) => {
            setFormField("region_id", v);
          }}
          data={regionsListFormatted}
          save="key"
          placeholder="Select a Region"
          defaultOption={regionSelectedUser}
        />

        <Spacer />

        <SelectList
          setSelected={(value) => {
            let active = value === 1 ? "Yes" : "No";
            setFormField("active", active);
          }}
          data={isUserActive}
          save="value"
          placeholder="Is user active?"
          defaultOption={isSelectedUserActive}
          search={false}
        />

        <Spacer />

        <Button onPress={onSubmit} text="Submit" />
      </View>
    </View>
  );
};

export default Form;
