import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useListUsers = () => {
  return useSelector((state) => state.user.list.users);
};

export const useListUsersStatus = () => {
  const status = useSelector((state) => state.user.list.status);
  const dispatch = useDispatch();
  return {
    status,
    setStatus: (newStatus) => {
      dispatch(actions.createUserResultStatus(newStatus));
    },
  };
};

export const useUpdateFields = (userID = null) => {
  const dispatch = useDispatch();
  // const status = useSelector((state) => state.user.edit.status);
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

  return {
    onSubmit: () => {
      dispatch(actions.createUser());
    },
  };
};

export const useNewUserStatus = () => {
  return useSelector((state) => state.user.create.status);
};

export const useResetFormFields = () => {
  const dispatch = useDispatch();
  return {
    resetFields: () => {
      dispatch(actions.resetFields());
    },
  };
};

export const useErrorMessages = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error.message);

  return {
    error,
    setError: (message) => {
      dispatch(actions.errorMessage(message))
    }
  }
};
