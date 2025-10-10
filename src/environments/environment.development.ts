import { enviromentTypes, environmentInterface } from "./environment-types";

export const environment : environmentInterface = {
    type: enviromentTypes.development,
    hasuraUrl: "http://localhost:8080/v1/graphql",
    serverUrl: "http://localhost:3000/graphql",
    "x-hasura-admin-secret": "mytopsecret"
};
