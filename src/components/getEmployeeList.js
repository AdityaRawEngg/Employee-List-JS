import { fetchData } from "./fetchData.js";
import { renderEmployeeCard } from "../markup/renderEmployeeCard.js";

export const getEmployeeList = () => {
  fetchData.then((employeeList) => {
    employeeList.forEach((employee) => {
      document.getElementById("root").appendChild(renderEmployeeCard(employee));
      document
        .querySelector(`#emp-${employee.id}`)
        .addEventListener("click", () => {
          console.log(event.target.id);
        });
    });
  });
};
