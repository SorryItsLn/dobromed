$(function () {
  // Попапы с врачами полученгие элементов
  const btns = document.querySelectorAll(".specialists__card-btn-item");
  const popups = document.querySelectorAll(".swiper__card-about");
  const popups_arr = [...popups];

  // Присвоение каждому элементу класса по нажатию
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      popups_arr[i].classList.add("active_popup");
      popups_arr[i].classList.add("box_animate_2");
    });
    // Удаление класса
    popups_arr[i].addEventListener("click", function () {
      popups_arr[i].classList.remove("active_popup");
    });
  }
});
