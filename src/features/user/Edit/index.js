import React from "react";
import { useRoute } from "@react-navigation/native";
import Form from "../Form";
import { useEditUser } from "../hooks";

const Edit = () => {
  const { params } = useRoute();
  const { userID } = params;
  const { status, onSubmit } = useEditUser(userID);

  return (
    <Form
      title={"Edit User's Profile"}
      handleSubmit={onSubmit}
      status={status}
      userID={userID}
    />
  );
};

export default Edit;
