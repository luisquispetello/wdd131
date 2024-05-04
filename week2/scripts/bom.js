const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("element");

const addChapter = () => {
  if (input.value.trim() != "") {
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();
  } else {
    return input.focus();
  }
};

const deleteChapter = () => {
  list.removeChild(li);
  input.focus();
};

button.addEventListener("click", () => {
  addChapter();
});

deleteButton.addEventListener("click", () => {
  deleteChapter();
});
