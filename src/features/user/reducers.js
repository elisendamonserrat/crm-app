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
  createUserStatus: (state) => {
    state.create.status = REQUESTING;
  },
  addNewUser: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.users.push(payload);
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
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
    state.edit.status = SUCCESS;
    const updateUserValues = state.form.fields;
    const users = state.list.users.map((a) => {
      if (a.id === payload) {
        a = updateUserValues;
      }
      return a;
    });

    state.list.users = users;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editUserError: (state) => {
    state.edit.status = ERROR;
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
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createUserStatus,
  addNewUser,
  createUserError,
  editUserStatus,
  editUser,
  editUserError,
  setForm,
  setFormField,
  resetFields,
} = slice.actions;

export default slice.reducer;
