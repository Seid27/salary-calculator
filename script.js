console.log('script.js file');

document.addEventListener('DOMContentLoaded',onReady,false);

let employees = [];
let totalMonthlyCost = 0;
//add event listener to form
function onReady() {
    console.log('DOM is ready');
    document.getElementById('emp-form').addEventListener('submit',onSubmit,false);
}

//triggered on submission of form
//collects input values, creates an object for each employee
//store each employee in an array
//update dom with new employee info
function onSubmit(event) {
    event.preventDefault();
    emp = {firstName: event.target.children[0].value,
        lastName: event.target.children[1].value,
        id: event.target.children[2].value,
        title: event.target.children[3].value,
        annualSalary: event.target.children[4].value,
    };

    //store employee in array
    employees.push(emp);

    //update table with new employee info
    const tBody = document.getElementById('tBody');

    const newTrElement = document.createElement('tr');

    newTrElement.innerHTML = `<td>${emp.firstName}</td>
    <td>${emp.lastName}</td>
    <td>${emp.id}</td>
    <td>${emp.title}</td>
    <td>$${parseFloat(emp.annualSalary).toLocaleString('en-US')}</td>
    <td><button onclick='deleteEmployee(event)'>Delete</button></td>`;

    tBody.appendChild(newTrElement);
    const totMonthlyValueSpan = document.getElementById('tot-monthly').lastChild;
    console.log(parseFloat(emp.annualSalary));
    totalMonthlyCost += (parseFloat(emp.annualSalary)/12);
    console.log(totalMonthlyCost);
    totMonthlyValueSpan.innerHTML = `$${totalMonthlyCost.toLocaleString('en-US')}`;
    document.getElementById('tot-monthly').style.backgroundColor = 
        `${totalMonthlyCost > 20000? 'red' : '#fbf5f3'}`;

    //clear inputs
    event.target.children[0].value = '';
    event.target.children[1].value = '';
    event.target.children[2].value = '';
    event.target.children[3].value = '';
    event.target.children[4].value = ''
}

//removes employee info from table
function deleteEmployee(event) {
    let empToDelete = 
    employees.filter(emp => emp.id === event.target.parentElement.parentElement.children[2].textContent);
    employees.splice(employees.indexOf(empToDelete[0]),1);
    totalMonthlyCost -= parseFloat(empToDelete[0].annualSalary)/12;
    event.target.parentElement.parentElement.remove();
    const totMonthlyValueSpan = document.getElementById('tot-monthly').lastChild;
    totMonthlyValueSpan.innerHTML = `$${totalMonthlyCost.toLocaleString('en-US')}`;
    document.getElementById('tot-monthly').style.backgroundColor = `${totalMonthlyCost > 20000? 'red' : '#fbf5f3'}`;
      
}
