import { enviromentTypes, environmentInterface } from "./environment-types";


export const environment: environmentInterface = {
    type: enviromentTypes.dev,
    hasuraUrl: "",
    serverUrl : "",
    "x-hasura-admin-secret": "",
};