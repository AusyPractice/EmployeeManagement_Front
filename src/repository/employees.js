import Repository from "./repository";
import generateRandomPerson from "../utils/random-person";
import random from "../utils/random-utils";

export default class EmployeesRepository extends Repository {

    constructor() {
        super();

        const numEmployees = random.getRandomNumber(1, 10);
        for (let i=0; i < numEmployees; i++) {
            const aRandomPerson = generateRandomPerson();
            this.add(aRandomPerson);
        }
    }

    getAll() {
        return new Promise((resolve, reject) => {
            super.getAll().then((employees) => {
                let newEmployeesList = [];

                for (let employee of employees) {
                    newEmployeesList.push({
                        id: employee.id,
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        department: employee.department,
                        position: employee.position,
                        startDate: employee.startDate,
                        endDate: employee.endDate,
                        isActive: employee.isActive,
                        isManager: employee.isManager
                    });
                }

                resolve(newEmployeesList)
            });
        });
    }

}