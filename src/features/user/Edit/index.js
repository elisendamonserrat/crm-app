import React from "react";
import { useRoute } from "@react-navigation/native";
import Form from "../Form";

const Edit = () => {
  return (
    <Form
      title={"Edit User's Profile"}
      handleSubmit={onSubmit}
      status={null}
      animalID={animalID}
    />
  );
};

export default Edit;
