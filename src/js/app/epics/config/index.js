import { ofType } from "redux-observable";
import { of, from } from "rxjs";
import { map, mergeMap, catchError, timeout, takeUntil } from "rxjs/operators";

import axios from "axios";

export default (action$, state$) =>
  action$.pipe(
    ofType("FETCH_GLOBAL_CONFIG"),
    mergeMap(() => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      return from(
        axios.get(`http://eoghan.io/data/config`, {
          cancelToken: source.token
        })
      ).pipe(
        timeout(60000),
        map(response => {
          return {
            type: "FETCH_GLOBAL_CONFIG_SUCCESS",
            data: response.data
          };
        }),
        takeUntil(
          action$.pipe(
            ofType("FETCH_GLOBAL_CONFIG_CANCEL"),
            tap(() => source.cancel())
          )
        ),
        catchError(error =>
          of({
            type: "FETCH_GLOBAL_CONFIG_ERROR",
            error
          })
        )
      );
    })
  );
