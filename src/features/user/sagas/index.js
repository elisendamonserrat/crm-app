import { all } from "redux-saga/effects";
import { watchAddUser } from "./create";
import { watchEditUser } from "./edit";
import { watchLoadUsers } from "./load";

export default function* user() {
  yield all([watchAddUser(), watchEditUser(), watchLoadUsers()]);
}
