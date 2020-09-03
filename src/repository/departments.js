import { get } from "../utils/server";

export default class DepartmentsRepository {

    getAll() {
        return get("/departments/getAllDepartments/");
    }

}