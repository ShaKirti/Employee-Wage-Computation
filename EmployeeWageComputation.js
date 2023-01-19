console.log("Welcome to Employee Wage Computation Program");

/**
 * 1) initializing a const variable
 * 2) using Math.floor() to return the greatest integer or equal to the given number & Math.random() to
 * return the number in the range of [0,1]
*/

// 1) initializing a const variable
const isAbsent = 0;

/**
 * 2) using Math.floor() to return the greatest integer or equal to the given number & Math.random() to
   return the number in the range of [0,1]
 */
// let empAttendence = Math.floor(Math.random() * 10) % 3;
/**
 * 1) declaring const variable
 * 2) using switch case to calculate daily employee wage
 */

// 1) declaring const variable
const WAGE_PER_HOUR = 20;
const FULL_DAY_WORKING_HOUR = 8;
const PART_TIME_WORKING_HOUR = 4;
let empHours = 0;
let monthlySalary = 0;
let empWage = 0;
let workingDayPerMonth = 20;

// 2) using switch case to calculate daily employee wage
var i;
for (i = 1; i <= workingDayPerMonth; i++){
    switch(Math.floor(Math.random() * 10) % 3){
        case 0:
            console.log("Employee is Absent.");
            empHours = 0;
            break;
        case 1:
            console.log("Employee is Present.");
            empHours = FULL_DAY_WORKING_HOUR;
            empWage = WAGE_PER_HOUR * FULL_DAY_WORKING_HOUR;
            break;
        case 2:
            console.log("Employee is present half day.");
            empHours = PART_TIME_WORKING_HOUR;
            empWage = WAGE_PER_HOUR * PART_TIME_WORKING_HOUR;
            break;   
    }
    monthlySalary += empWage;
}


// let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee monthly wage is: "+ monthlySalary);