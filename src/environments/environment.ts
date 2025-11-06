import { enviromentTypes, environmentInterface } from "./environment-types";


export const environment: environmentInterface = {
    type: enviromentTypes.local,
    serverUrl : "http://localhost:3000/graphql",
};