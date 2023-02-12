import React from "react";
// import { useNewAnimal, useCreateAnimalStatus } from "../hooks";
import Form from "../Form";

const New = () => {
//   const { onSubmit } = useNewAnimal();
//   const status = useCreateAnimalStatus();

  return (
    <Form
      handleSubmit={null}
      title={"Add a New User"}
      status={null}
      animalID={null}
    />
  );
};

export default New;
