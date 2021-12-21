import { createStore } from "redux";

import rootRducer from "./reducer/index";
const store = createStore(
  rootRducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
