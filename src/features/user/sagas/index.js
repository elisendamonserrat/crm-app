import { all } from "redux-saga/effects";
import { watchAddUser } from "./create";
import {watchEditUser} from "./edit"

export default function* animal() {
  yield all([watchAddUser(), watchEditUser()]);
}
