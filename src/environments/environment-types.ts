
export enum enviromentTypes{
    dev,
    local,
    production
}

export interface environmentInterface{
    type : enviromentTypes,
    serverUrl : string,
}