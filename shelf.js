const unfinish_content = document.getElementsByClassName("unfinish_content")[0];
const finish_content = document.getElementsByClassName("finish_content")[0];

const getData = () => {
  let arr_data = [];

  for (let index = 0; index < localStorage.length; index++) {
    arr_data.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
  }
  return arr_data;
};

const unfinish_shelf = () => {
  return getData().map((data) => {
    console.log(data);
    return `<div class="box_book">
                    <div class="title_book">
                        <h1>Title</h1>
                        <p>year</p>
                    </div>
                    <p>Author</p>
                    <div class="menu_box">
                        <button>Delete</button>
                        <button>Edit</button>
                        <button>Status</button>
                    </div>
                </div>`;
  });
};

unfinish_content.innerHTML = unfinish_shelf();
