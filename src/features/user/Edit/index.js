import React from "react";
import { useRoute } from "@react-navigation/native";
import Form from "../Form";

const Edit = () => {
  const { params } = useRoute();
  const { userID } = params;
  console.log("userID edit", userID);
  return (
    <Form
      title={"Edit User's Profile"}
      handleSubmit={null}
      status={null}
      userID={userID}
    />
  );
};

export default Edit;
