import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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
      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useEditUser = (userID) => {
  const dispatch = useDispatch();
  const status = useEditUserStatus();

  return {
    status,
    onSubmit: () => {
      dispatch(actions.editUser(userID));
    },
  };
};

export const useEditUserStatus = () => {
  return useSelector((state) => state.user.edit.status);
};

export const useNewUser = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.form.fields);
  const uuID = uuidv4();
  const user = { ...userDetails, id: uuID };

  return {
    onSubmit: () => {
      dispatch(actions.addNewUser(user));
    },
  };
};

export const useResetFormFields = () => {
  const dispatch = useDispatch();
  return {
    resetFields: () => {
      dispatch(actions.resetFields());
    },
  };
};
