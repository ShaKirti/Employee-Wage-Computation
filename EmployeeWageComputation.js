console.log("Welcome to Employee Wage Computation Program");

//UC-1 Attendence of employee
/**
 * 1) initializing a const variable
 * 2) using Math.floor() to return the greatest integer or equal to the given number & Math.random() to
 * return the number in the range of [0,1]
 * 3) using if-else conditional statement, if empAttendance == isAbsent then the employee is absent else
 * employee is present
*/

// 1) initializing a const variable
const isAbsent = 0;

/**
 * 2) using Math.floor() to return the greatest integer or equal to the given number & Math.random() to
   return the number in the range of [0,1]
 */
let empAttendence = Math.floor(Math.random() * 10) % 2;

/** 
 * 3) using if-else conditional statement, if empAttendance == isAbsent then the employee is absent else
   employee is present
*/
if (empAttendence == isAbsent) {
    console.log("Employee is Absent.");
    return;
} else {
    console.log("Employee is Present.");
}

// UC-2 Calculate Daily employee wage
/**
 * 1) declaring const variable
 * 2) using switch case to calculate daily employee wage
 */

// 1) declaring const variable
const WAGE_PER_HOUR = 20;
const FULL_DAY_WORKING_HOUR = 8;
let empHours = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;

// 2) using switch case to calculate daily employee wage
switch(empCheck){
    case 0:
        empHours = 0;
    case 1:
        empHours = FULL_DAY_WORKING_HOUR;
        break;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("Daily Employee wage is: "+ empWage);