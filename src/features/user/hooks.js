import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING, INPROGRESS } from "../../utilities/helpers";
import * as actions from "./reducers";

export const useListUsers = () => {
  return useSelector((state) => state.user.list.users);
};

export const useListUsersStatus = () => {
  return useSelector((state) => state.users.list.status);
};

export const useUpdateFields = (userID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.edit.status);
    const users = useSelector((state) => state.user.list.users);
    console.log('users', users)
  const defaultFields = useSelector((state) => state.user.form.fields);

  const fields = !userID
    ? defaultFields
    : users.filter((user) => user.id === userID)[0];

  console.log("fields", fields);

  if (userID)
    console.log(
      "user ID ::: ",
      userID,
      status,
      userID && status !== INPROGRESS
    );

//   useEffect(() => {
//     if (userID && status === PENDING) {
//       dispatch(actions.setForm(userID));
//     }
//   }, [userID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};
