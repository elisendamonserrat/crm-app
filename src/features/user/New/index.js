import React, { useEffect } from "react";
import { useNewUser, useResetFormFields, useNewUserStatus } from "../hooks";
import Form from "../Form";

const New = () => {
  const { onSubmit } = useNewUser();
  const { resetFields } = useResetFormFields();
  const status = useNewUserStatus();

  useEffect(() => resetFields(), []);

  return (
    <Form
      handleSubmit={onSubmit}
      title={"Add a New User"}
      status={status}
      userID={null}
    />
  );
};

export default New;
