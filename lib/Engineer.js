// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = githubUsername;
    } 

    getGithub () {
        return this.github;
    }
}

Engineer.prototype.getRole = function() {
    return 'Engineer';
}

module.exports = Engineer;