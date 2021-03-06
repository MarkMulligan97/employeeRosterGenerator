// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNum;
    } 

    getOfficeNumber() {
        return this.officeNumber;
    }
}

Manager.prototype.getRole = function() {
    return 'Manager';
}

module.exports = Manager;