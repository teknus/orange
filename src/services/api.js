import {Url,ApplicationKey} from "../configs/configs"

var header = {
    'X-Parse-Application-Id': ApplicationKey,
    'X-Parse-Rest-Api-Key': 'undefined'
};

// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: header,
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(`${Url}/users/login`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             if (user) {
//                 user.authdata = window.btoa(username + ':' + password);
//                 localStorage.setItem('user', JSON.stringify(user));
//             }

//             return user;
//         });
// }

// function logout() {
//     localStorage.removeItem('user');
// }

export function getAllImages(repository) {
    const requestOptions = {
        method: 'GET',
        headers: header
    };

    return fetch(`${Url}classes/${repository}`, requestOptions);
}