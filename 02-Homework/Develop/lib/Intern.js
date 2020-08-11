// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class intern extends Employee {
    constructor(name, id, email, student) {
        this.role = "Intern";
        this.student = student;
    }

    getStudent(){
        return this.student;
    };
    getRole(){
        return this.role;
    };
}