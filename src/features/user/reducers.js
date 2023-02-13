import { createSlice, current } from "@reduxjs/toolkit";
import {
  PENDING,
  INPROGRESS,
  REQUESTING,
  SUCCESS,
  ERROR,
} from "../../utilities/helpers";
import { initialUsers } from "../../utilities/data";

const name = "user";

const initialState = {
  list: {
    status: PENDING,
    users: initialUsers,
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  form: {
    fields: {
      name: "",
      lastName: "",
      active: false,
      region_id: "",
    },
  },
  error: {
    message: "",
  },
};

const reducers = {
  createUser: (state) => {
    state.create.status = REQUESTING;
  },
  createUserResult: (state, { payload }) => {
    state.list.users = payload;
    state.form.fields = initialState.form.fields;
    state.create.status = initialState.create;
  },
  createUserResultStatus: (state, { payload }) => {
    state.list.status = payload;
  },
  createUserError: (state, { payload }) => {
    state.create.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  setForm: (state, { payload }) => {
    const user = state.list.users.find((a) => a.id === payload);

    if (user) {
      state.form.fields = user;
    } else {
      state.error.message = `could not find user with id: ${payload}`;
    }
  },
  editUser: (state, { payload }) => {
    state.edit.status = REQUESTING;
    state.list.status = PENDING;
  },
  editUserResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.status = SUCCESS;
    state.list.users = payload;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editUserError: (state, { payload }) => {
    state.edit.status = ERROR;
    state.list.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  editUserStatus: (state, { payload }) => {
    state.edit = payload;
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
  resetFields: (state) => {
    state.form.fields = initialState.form.fields;
  },
  errorMessage: (state, { payload }) => {
    state.error.message = payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createUser,
  createUserResult,
  createUserResultStatus,
  createUserError,
  editUserStatus,
  editUser,
  editUserResult,
  editUserError,
  setForm,
  setFormField,
  resetFields,
  errorMessage,
} = slice.actions;

export default slice.reducer;
