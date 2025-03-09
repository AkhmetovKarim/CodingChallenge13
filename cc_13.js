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

