import React, { useEffect } from "react";
import { useNewUser, useResetFormFields } from "../hooks";
import Form from "../Form";

const New = () => {
  const { onSubmit } = useNewUser();
  const { resetFields } = useResetFormFields();
  //   const status = useCreateAnimalStatus();

  useEffect(() => resetFields(), []);

  return (
    <Form
      handleSubmit={onSubmit}
      title={"Add a New User"}
      status={null}
      userID={null}
    />
  );
};

export default New;
