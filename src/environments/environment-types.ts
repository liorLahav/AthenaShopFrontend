
export enum enviromentTypes{
    development,
    local,
    production
}

export interface environmentInterface{
    type : enviromentTypes,
    hasuraUrl : string,
    serverUrl : string,
    "x-hasura-admin-secret" : string
}