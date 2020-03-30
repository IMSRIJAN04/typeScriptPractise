var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeeName = name;
    }
    employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return employee;
}());
var emp1 = new employee('ERROJU');
emp1.greet();
console.log(emp1.employeeName);
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return manager;
}(employee));
var m1 = new manager('SRIJAN');
m1.delegateWork();
console.log(m1.employeeName);
m1.greet();
