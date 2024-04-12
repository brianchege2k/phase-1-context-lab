/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


// Define the required functions

// Function to create an employee record
const createEmployeeRecord = function (employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

// Function to process an array of arrays into an array of employee records
const createEmployeeRecords = function (employeesData) {
    return employeesData.map(employeeData => createEmployeeRecord(employeeData));
};

// Function to add a timeIn event object to an employee's record of timeInEvents
const createTimeInEvent = function (dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this;
};

// Function to add a timeOut event object to an employee's record of timeOutEvents
const createTimeOutEvent = function (dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this;
};

// Function to calculate the hours worked on a specific date
const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
};

// Function to calculate wages earned on a specific date
const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

// Function to aggregate all the dates' wages and add them together for a given employee
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0);

    return payable;
};

// Function to calculate payroll using the mock data provided by Ultron data systems
const calculatePayroll = function (employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
};

// Define other helper functions if needed
// Function to find an employee by their first name in a collection of employee records
const findEmployeeByFirstName = function (collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
};
