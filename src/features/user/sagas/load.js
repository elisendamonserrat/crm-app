import { all, put, select, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { get } from "../../../utilities/async_storage";

export function* watchLoadUsers() {
  yield takeLatest(actions.loadUsers.toString(), takeLoadUsers);
}

export function* takeLoadUsers() {
  try {
    const users = yield get("USERS_LIST");
    const defaultUsers = yield select((state) => state.user.list.users);

    yield delay(1500);

    if (!users) {
      yield put(actions.loadUsersResult(defaultUsers));
    } else {
      yield put(actions.loadUsersResult(users));
    }
  } catch (error) {
    yield put(actions.loadUsersResult(defaultUsers));
  }
}
