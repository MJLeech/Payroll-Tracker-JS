// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []
// Collect employee data
const collectEmployees = function() {// Get user input to create and return an array of employee objects
  let con = true
  while(con !== false){
   const getEmployee = function(){
  let getFirst = prompt('Enter First Name');
  let getLast = prompt("Enter Last Name");
  let getSal = parseInt(prompt("Enter Salary"))
   if (getFirst !== "" && getLast !== "" && isNaN(getSal) === false){
    let employee ={
      firstName:getFirst,
      lastName:getLast,
      salary:getSal,
    }
    employeesArray.push(employee)
    con = confirm("add More?")}
    else{
      con = false
      alert("Invalid input, Please be sure to fill out each form and use only numerical charachters for Salary")
    }
 return employeesArray }
getEmployee();}
return employeesArray}

// Display the average salary
const displayAverageSalary = function(employeesArray) { // Calculate and display average salary 
  const salArray = []
  for (let i = 0; i < employeesArray.length ; i++){
    const grimbus = employeesArray[i].salary;
    salArray.push(grimbus)
  }
  let sum = 0;
  for(let i = 0; i<salArray.length; i++){
    sum += salArray[i];
  }
  const avg = sum / salArray.length
  console.log(`The Average Employee salary is ${avg}`)
  return employeesArray;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {//Select and display a random employee

function rand() {
  let scroop = employeesArray[(Math.floor(Math.random() * employeesArray.length))];
  console.log(`the winner is: ${scroop.lastName},${scroop.firstName}`)
return; }
rand()

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
