import { enviromentTypes, environmentInterface } from "./environment-types";


export const environment: environmentInterface = {
    type: enviromentTypes.local,
    hasuraUrl: "",
    serverUrl : "",
    "x-hasura-admin-secret": "",
};