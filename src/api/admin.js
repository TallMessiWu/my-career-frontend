import service from '~/axios'

export function login(username, password){
    return service.post("/auth/login", {
        username,
        password
    })
}


export function signup(username, password,re_password, email){
    return service.post("/auth/register",{
        username,
        password,
        re_password,
        email
    })
}