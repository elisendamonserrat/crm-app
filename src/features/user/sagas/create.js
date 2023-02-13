import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { v4 as uuidv4 } from "uuid";


export function* watchAddUser() {
  yield takeLatest(actions.createUser.toString(), takeAddUser);
}

export function* takeAddUser() {
  console.log("Starting fetch request to API");
  try {
    const fields = yield select((state) => state.user.form.fields);
    const users = yield select((state) => state.user.list.users);

    const user = {
      id: uuidv4(),
      ...fields,
    };

    // pretend call to API
    yield delay(500);

    const result = [user, ...users];

    // yield set("UPDATE USERS LIST", result);

    yield put(actions.createUserResult(result));
  } catch (error) {
    yield put(actions.createUserError(error.toString()));
  }
}
