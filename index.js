class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }
}

class WorkTeam {
    constructor(name) {
        this.name = name; 
        this.employees = [];
    }
/* this function takes in an employee and pushes it to the employees */
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employee.push(employee);
        } else {
            throw new Error(`You can only add an instance of Employee. Argument is not an employee: ${employee}`);
        }
    }

    describe() {
        return `${this.name} has ${this.employees.length} employees`;
    }
}

class Menu {
    constructor() {
        this.WorkTeams = [];
        this.selectedWorkTeam = null;
    }
/* this will let the user create, view, delete, or display work teams */
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1': 
                    this.createWorkTeam();
                    break;
                case '2':
                    this.viewWorkTeam();
                    break;
                case '3':
                    this.deleteWorkTeam();
                    break;
                case '4':
                    this.displayWorkTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        
        alert('Adios!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new work team
            2) view team
            3) delete team
            4) display all work teams
        `);
    }

    showWorkTeamMenuOptions(WorkTeamInfo) {
        return prompt(`
        0) back
        1) create employee
        2) delete employee
        -----------------------
        ${WorkTeamInfo}
        `);
    }
/* displays the work teams and alerts the user. */
    displayWorkTeams() {
        let WorkTeamString = '';
        for (let i = 0; i < this.WorkTeams.length; i++) {
            WorkTeamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(WorkTeamString);
    }

    createWorkTeam() {
        let name = prompt('Enter name for new team:');
        this.WorkTeams.push(new WorkTeam(name));
    }

    viewWorkTeam() {
        let index = prompt('Enter the index of the work team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedWorkTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedWorkTeam + '\n';
            
            for (let i = 0; i < this.selectedWorkTeam.employees.length; i++) {
                description += i + ') ' + this.selectedWorkTeam.employees[i].name
                 + ' - ' + this.selectedWorkTeam.employees[i].department + '\n';
            }
/* this function lets the user either create or delete an employee. */
            let selection = this.showWorkTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createEmployee();
                    break;
                case '2':
                    this.deleteEmployee();
            }
        }   
    }
/* displays prompt to enter a name for employee and also the department. */
    createEmployee() {
        let name = prompt('Enter name for new employee:');
        let department = prompt('Enter department for new employee:');
        this.selectedWorkTeam.players.push(new Employee(name, department));
    }
/* displays prompt to delete an employee. */
    deleteEmployee() { 
        let index = prompt('Enter the index of the employee you wish to delete:');
        if (index > -1 && index < this.selectedWorkTeam.employees.length) {
            this.selectedWorkTeam.employees.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();