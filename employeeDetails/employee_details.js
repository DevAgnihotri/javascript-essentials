const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, speciaization : 'JS' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, speciaization : 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, speciaization : 'Java'},
    { id: 4, name: 'Emma Davis', age: 26, department: 'Marketing', salary: 40000, speciaization: 'SEO' },
    { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 70000, speciaization: 'React' },
    { id: 6, name: 'Sophia Wilson', age: 32, department: 'HR', salary: 48000, speciaization: 'Recruitment' },
    { id: 7, name: 'James Taylor', age: 29, department: 'Finance', salary: 55000, speciaization: 'Accounting' }
  ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

// Function to display HR employees  
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find employee by ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findbyspecialization(speciaization){
    const foundEmployee = employees.find(employee => employee.speciaization === speciaization);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}: ${foundEmployee.speciaization}</p>`;
    }
}