// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Manager extends Employee{
    constructor(name, id, email, boss){
        this.role = "Manager";
        this.boss = boss;
       }
    getBoss(){
     return this.boss;
    };
    
    getRole() {
        return this.role;
    };
}
