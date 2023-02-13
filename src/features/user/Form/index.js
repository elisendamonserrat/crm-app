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
import Spacer from "../../../components/Spacer/index";
import { View, TextInput, Text } from "react-native";
import Button from "../../../components/Button/index";
import Title from "../../../components/Title/index";
import formStyles from "./styles";
import { regionsList } from "../../../utilities/data";
import { useUpdateFields, useErrorMessages } from "../hooks";

const Form = ({ handleSubmit, status, userID = null, title }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(userID);
  const { error, setError } = useErrorMessages();

  const { name, lastName, active, region_id } = fields;

  const onSubmit = () => {
    if (!name || !lastName || !active || !region_id)
      return setError("Please, fill all inputs.");

    handleSubmit();
    setError("");
    navigate("Users By Region", { regionID: region_id });
  };

  const regionsListFormatted = regionsList.map((region) => ({
    key: region.id,
    value: region.name,
  }));

  const isUserActive = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
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
            borderColor: "rgb(128, 128, 128);",
            borderRadius: 10,
            padding: 15,
            paddingLeft: 20,
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
            borderColor: "rgb(128, 128, 128);",
            borderRadius: 10,
            padding: 15,
            paddingLeft: 20,
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
            setFormField("active", value);
          }}
          data={isUserActive}
          save="value"
          placeholder="Is user active?"
          defaultOption={isSelectedUserActive}
          search={false}
        />

        <Spacer />

        <Button
          onPress={onSubmit}
          text="Submit"
          disabled={status !== PENDING && status !== INPROGRESS}
        />
        {error !== "" && <Text style={{ color: "red" }}>Error: {error}</Text>}
      </View>
    </View>
  );
};

export default Form;
