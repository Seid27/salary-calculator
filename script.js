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
    // console.log(event.target.children);
    emp = {firstName: event.target.children[0].value,
        lastName: event.target.children[1].value,
        id: event.target.children[2].value,
        title: event.target.children[3].value,
        annualSalary: event.target.children[4].value,
    };

    //store employee in array
    employees.push(emp);
    // totalMonthlyCost += emp.annualSalary/12;
    console.log(totalMonthlyCost);

    //update table with new employee info
    const tBody = document.getElementById('tBody');
    tBody.innerHTML += `
    <tr>
        <td>${emp.firstName}</td>
        <td>${emp.lastName}</td>
        <td>${emp.id}</td>
        <td>${emp.title}</td>
        <td>$${emp.annualSalary}</td>
        <td><button>Delete</button></td>
    </tr>`
    
    if (employees.length != 0) {
        const tFoot = document.getElementById('tFoot');
        tFoot.innerHTML = `<tr><th>Total Monthly Cost : </th><td>$${parseInt(totalMonthlyCost += emp.annualSalary/12)}</td></tr>`
        tFoot.style.backgroundColor = 
        `${totalMonthlyCost > 20000? 'red' : 'white'} 
        `
    }

    //todo: add the total monthly cost

    console.log(tBody);

    //clear inputs
    event.target.children[0].value = '';
    event.target.children[1].value = '';
    event.target.children[2].value = '';
    event.target.children[3].value = '';
    event.target.children[4].value = ''
}