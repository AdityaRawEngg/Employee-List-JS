export const renderEmployeeCard = (employee) => {
  let employeeCard = document.createElement("div");
  employeeCard.classList.add("employee-card");
  employeeCard.innerHTML = `
          <div class="employee-image" style="background-image: url(${employee.imageUrl})"></div>
            <div class="employee-details">
              <p id="emp-${employee.id}" class="employee-name">${employee.firstName} ${employee.lastName}</p>
              <p class="employee-company">${employee.company}</p>
            </div>
          </div>
    `;
  return employeeCard;
};
