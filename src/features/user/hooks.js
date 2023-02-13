import { useEffect, useState } from "react";
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
  let fields = useSelector((state) => state.user.form.fields);
  
  useEffect(() => {
    if (userID) {
      dispatch(actions.setForm(userID));
    }
    return () => (userID = null);
  }, [userID]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};
