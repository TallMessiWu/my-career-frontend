import service from '~/axios'

export function login(username, password){
    return service.post("/auth/login", {
        username,
        password
    })
}


export function signup(username, password, re_password, email){
    return service.post("/auth/register",{
        username,
        password,
        re_password,
        email
    })
}

export function logout(){
    return service.get("/auth/logout")
}

export function forgotPasswordEmail(username){
    return service.post('/auth/forgotPasswordEmail', {username})
}

export function checkValidPWReset(hashedUsername){
    return service.post('/auth/checkValidPWReset', {hashedUsername})
}

export function changePassword(username, password, re_password){
    return service.post('/auth/changePassword', {
        username,
        password,
        re_password
    })
}