var inputBox = document.getElementById("input-box");
var addBtn = document.getElementById("addbtn");
var taskListContainer = document.getElementById("task-list-cont");
var events;
var addTask = () => {
  if (addBtn.innerHTML == "Edit") {
    events.target.previousElementSibling.innerHTML = inputBox.value;
    inputBox.value = "";
    addBtn.innerHTML = "Add";
  } else {
    var inputBoxText = inputBox.value.trim();
    if (!inputBoxText) {
      alert("Enter the Task");
      return false;
    }
    var taskList = document.createElement("li");
    var taskContainer = document.createElement("p");
    var editButton = document.createElement("button");

    taskContainer.addEventListener("click", () => {
      taskContainer.style.textDecoration = "line-through";
    });

    var deleteButton = document.createElement("button");

    taskListContainer.appendChild(taskList);
    taskList.appendChild(taskContainer);
    taskList.appendChild(editButton);
    taskList.appendChild(deleteButton);
    // console.log("hello");
    taskContainer.innerHTML = inputBoxText;
    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    inputBox.value = "";
  }
};

var update = (e) => {
  if (e.target.innerHTML == "Edit") {
    //when edit button is clicked
    inputBox.value = e.target.previousElementSibling.innerHTML; //targets previous element(p tag) for editing
    addBtn.innerHTML = "Edit";
  } else if (e.target.innerHTML === "Delete") {
    e.target.parentElement.remove(); //remove function is used to delete task
    console.log(e.target.parentElement);
  }
  events = e;
};

addBtn.addEventListener("click", addTask);

taskListContainer.addEventListener("click", update);
