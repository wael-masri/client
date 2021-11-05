import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../Reduxitems/Actions";

import axios from "axios";

export const fetchdataitem = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    axios
      .get("/items/get")
      .then((response) => {
        const data_fetching = response.data;

        dispatch(fetchDataSuccess(data_fetching));
      })
      .catch((error) => {
        const msg = error.message;
        dispatch(fetchDataFailure(msg));
      });
  };
};
