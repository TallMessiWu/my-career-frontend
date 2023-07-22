import service from '~/axios'

export function getAllCycles(user_id){
    return service.get("/cycle/getAll/" + user_id)
}

export function createCycle(user_id, cycle_name){
    return service.post("/cycle/add/" + user_id, {
        cycle_name
    })
}

export function updateApplication(user_id, cycle_name){
    return service.post("/cycle/update/" + user_id, {
        cycle_name
    })
}

export function deleteApplication(cycle_id) {
    return service.post("/cycle/delete/" + cycle_id, {})
}