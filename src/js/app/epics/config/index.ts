import { ofType } from "redux-observable";
import { of, from } from "rxjs";
import { map, mergeMap, catchError, timeout } from "rxjs/operators";

import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Methods": "GET",
    "Content-Type": "application/json"
  }
};

//http://api.icndb.com/jokes/random

export default (action$, state$) =>
  action$.pipe(
    ofType("FETCH_GLOBAL_CONFIG"),
    mergeMap(() =>
      from(axios.get(`http://eoghan.io/data/config`)).pipe(
        timeout(60000),
        map(response => {
          console.log(response);
          return {
            type: "FETCH_GLOBAL_CONFIG_SUCCESS",
            data: response.data
          };
        }),
        catchError(error =>
          of({
            type: "FETCH_GLOBAL_CONFIG_ERROR",
            error
          })
        )
      )
    )
  );
