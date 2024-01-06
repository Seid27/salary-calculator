console.log('script.js file');

document.addEventListener('DOMContentLoaded',onReady,false);

let employees = [];
//add event listener to form
function onReady() {
    console.log('DOM is ready');
    document.getElementById('emp-form').addEventListener('submit',onSubmit,false);
}

//triggered on submission of form
//collects input values
//creates an object for each employee
//store each employee in an array
function onSubmit(event) {
    event.preventDefault();
    // console.log(event.target.children);
    emp = {firstName: event.target.children[0].value,
        lastName: event.target.children[1].value,
        id: event.target.children[2].value,
        title: event.target.children[3].value,
        title: event.target.children[4].value,
    };

    employees.push(emp);
    console.log(employees);
    
    event.target.children[0].value = '';
    event.target.children[1].value = '';
    event.target.children[2].value = '';
    event.target.children[3].value = '';
    event.target.children[4].value = '';
    // for (let index = 0; index < event.target.children.length-1; index++) {
    //     const inputElement = (event.target.children)[index];
    //     console.log(inputElement);
    // }

}