import service from '~/axios'

export function getAllApplication(cycle_id){
    return service.get("/application/getAll/" + cycle_id)
}

export function createApplication(cycyle_id, company, url, comment){
    return service.post("/application/add/" + cycyle_id, {
        company,
        url,
        comment
    })
}

export function updateApplication(app_id, company, url, comment){
    return service.post("/application/update/" + app_id, {
        company,
        url,
        comment
    })
}

export function deleteApplication(app_id) {
    return service.post("/application/delete/" + app_id, {})
}