import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
import { set } from "../../../utilities/async_storage";

export function* watchEditUser() {
  yield takeLatest(actions.editUser.toString(), takeEditUser);
}

export function* takeEditUser(action) {
  console.log("Starting fetch request to API -- EDIT");
  const userID = action.payload;

  try {
    const fields = yield select((state) => state.user.form.fields);
    const users = yield select((state) => state.user.list.users);

    const result = users.map((user) => {
      // if animal is not the one being updated, return it unchanged
      if (user.id !== userID) return user;

      // otherwise, animal is the one being updated
      // return the new fields instead of the old ones
      return fields;
    });

    // pretend call to API
    yield delay(500);
    
    yield set("USERS_LIST", result);

    yield put(actions.editUserResult(result));
  } catch (error) {
    yield put(actions.editUserError(error.toString()));
  }
}
