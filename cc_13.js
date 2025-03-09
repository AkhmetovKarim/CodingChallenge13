//Task 2 - Adding Employee Cards Dynamically
const employeeContainer = document.getElementById("employeeContainer");

function addEmployee(name, position) {
    const employeeCard = document.createElement("div"); 
    employeeCard.setAttribute("class", "employee-card");
    
    const employeeName = document.createElement("h3");
    employeeName.textContent = name;

    const employeePosition = document.createElement("p");
    employeePosition.textContent = position;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation();
        employeeContainer.removeChild(employeeCard);
    });
    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeePosition);
    employeeCard.appendChild(removeButton);

    employeeContainer.appendChild(employeeCard);
}

//Task 3 - Bulk Update on Employee Cards
function highlightEmployees() {
    const employeeCards = document.querySelectorAll(".employee-card");
    const employeeArray = [...employeeCards];
    employeeArray.forEach(card => {
        card.style.backgroundColor = "lightgray";
    });
}
//forgot to commit task 3, it comes together in Commit Task 2

//Task 4 - Implementing Removal 
employeeContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee card clicked");
    }
});

//Task 5 - Inline Editing of Employee Details
function enableEditing(employeeCard) {
    const nameElement = employeeCard.querySelector("h3");
    const positionElement = employeeCard.querySelector("p");

    const nameInput = document.createElement("input");
    positionInput.value = positionElement.textContent;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function() {
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;

        employeeCard.replaceChild(nameElement, nameInput);
        employeeCard.replaceChild(positionElement, positionInput);
        employeeCard.replaceChild(saveButton, nameElement.nextSibling);
    });
    employeeCard.replaceChild(positionInput, positionElement);
    employeeCard.appendChild(saveButton);
}
document.addEventListener("DOMContentLoaded", function() {
    addEmployee("Li Qiang", "Management");
    addEmployee("Zhao Leji", "IT");
});


