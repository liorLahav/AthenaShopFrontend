import { enviromentTypes, environmentInterface } from "./environment-types";


export const environment: environmentInterface = {
    type: enviromentTypes.local,
    hasuraUrl: "",
    serverUrl : "http://localhost:3000/graphql",
    "x-hasura-admin-secret": "",
};