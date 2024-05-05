const form_btn = document.getElementsByClassName("input_menu-btn")[0];
const finish_btn = document.getElementsByClassName("finish_menu-btn")[0];
const unfinish_btn = document.getElementsByClassName("unfinish_menu-btn")[0];

const form = document.getElementsByTagName("form")[0];
const unfinish_content = document.getElementsByClassName("unfinish_content")[0];
const finish_content = document.getElementsByClassName("finish_content")[0];

form_btn.addEventListener("click", (ev) => {
  form.style.display = "flex";
  unfinish_content.style.display = "none";
  finish_content.style.display = "none";

  form_btn.classList.add("active");
  finish_btn.classList.remove("active");
  unfinish_btn.classList.remove("active");
});

unfinish_btn.addEventListener("click", (ev) => {
  form.style.display = "none";
  unfinish_content.style.display = "flex";
  finish_content.style.display = "none";

  form_btn.classList.remove("active");
  unfinish_btn.classList.add("active");
  finish_btn.classList.remove("active");
});

finish_btn.addEventListener("click", (ev) => {
  form.style.display = "none";
  unfinish_content.style.display = "none";
  finish_content.style.display = "flex";

  form_btn.classList.remove("active");
  unfinish_btn.classList.remove("active");
  finish_btn.classList.add("active");
});
