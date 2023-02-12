import { createSlice } from "@reduxjs/toolkit";
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
      name: null,
      lastName: null,
      active: false,
      region_id: null,
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
    state.list.animals = payload;
    // state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createUserError: (state, { payload }) => {
    state.create.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  setForm: (state, { payload }) => {
    const user = state.list.users.find((a) => (a.id = payload));

    if (user) {
      state.form.fields = user;
    } else {
      state.error.message = `could not find user with id: ${payload}`;
    }
  },
  editUser: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.animals = payload;
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
      
      console.log('current', current, payload)

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
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
} = slice.actions;

export default slice.reducer;
