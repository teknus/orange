import {Url,ApplicationId} from "../configs/configs"
import {login} from "./auth";
var header = {
    'X-Parse-Application-Id': ApplicationId,
    'X-Parse-Rest-Api-Key': 'undefined'
};

export function loginPost(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ email, password })
    };

    return fetch(`${Url}login`, requestOptions)
        .then(response => response)
        .then(handleLogin);
}

function handleLogin(response){
    if (response.status === 200){
        login(response.json().objectId)
        return true
    } 
    return false
}