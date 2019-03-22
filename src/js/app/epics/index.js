import { combineEpics } from "redux-observable";

import configEpics from "epics/config";

export const rootEpic = combineEpics(configEpics);
