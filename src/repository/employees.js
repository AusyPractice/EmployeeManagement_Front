import { get, put } from "../utils/server";

export default class EmployeesRepository {

    getAll() {
        return get("/employees/getAllEmployeesDTO");
    }

    get(id) {
        return get("/employees/getEmployee/" + id);
    }

    update(id, entity) {
        return put(`/employees/updateEmployee/${id}/${entity.department.id}/${entity.jobCategory.id}`, entity);
    }

}