const element = document.querySelector(".topbar__menu");
const button = document.querySelector(".topbar__menu_svg");
const buttonList1 = document.getElementById(1);
const buttonList2 = document.getElementById(2);
const buttonList3 = document.getElementById(3);
button.onclick = function () {
  element.classList.toggle("topbar__menu_list");
  buttonList1.classList.toggle("topbar__menu_listEl_hidden");
  buttonList2.classList.toggle("topbar__menu_listEl_hidden");
  buttonList3.classList.toggle("topbar__menu_listEl_hidden");
};
buttonList3.onclick = function () {
  alert("Не ведитесь на провакационные рекламы, это обман")
}