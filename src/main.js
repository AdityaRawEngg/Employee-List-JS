import { renderEmployeeCard } from "./markup/renderEmployeeCard.js";
import { getEmployeeList } from "./components/getEmployeeList.js";
window.onload = () => {
  getEmployeeList();
};
