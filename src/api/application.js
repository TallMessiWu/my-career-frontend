import service from '~/axios'

export function getAllApplication(cycle_id){
    return service.get("/application/getAll/" + cycle_id)
}