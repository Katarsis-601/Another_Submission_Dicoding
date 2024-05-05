const title = document.getElementsByClassName("title_input")[0];
const author = document.getElementsByClassName("author_input")[0];
const year = document.getElementsByClassName("year_input")[0];
const read_btn = document.getElementsByClassName("read-btn");

const form = document.getElementsByTagName("form")[0];
const unfinish_content = document.getElementsByClassName("unfinish_content")[0];
const finish_content = document.getElementsByClassName("finish_content")[0];

const data = (
  id = null,
  title = "",
  author = "",
  year = 0,
  isComplete = true
) => {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
};

const clear = () => {
  title.value = "";
  author.value = "";
  year.value = 0;
  read_btn[0].checked = true;

  form.style.display = "flex";
  unfinish_content.style.display = "none";
  finish_content.style.display = "none";
};

window.onload = () => {
  clear();
};

document.getElementsByTagName("form")[0].addEventListener("submit", (ev) => {
  ev.preventDefault();

  localStorage.setItem(
    Date.now(),
    JSON.stringify(
      data(
        Date.now(),
        title.value,
        author.value,
        year.value,
        read_btn[0].checked ? true : false
      )
    )
  );
});
