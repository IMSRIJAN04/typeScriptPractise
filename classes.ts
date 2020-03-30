class employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName=name;
    }
    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new employee('ERROJU');
emp1.greet();
console.log(emp1.employeeName);
class manager extends employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}
let m1= new manager('SRIJAN');
m1.delegateWork();
console.log(m1.employeeName);
m1.greet();

 