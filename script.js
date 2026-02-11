const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.stopPropagation();
    e.target.closest("li").remove();
    saveData();
    return;
  }

  const li = e.target.closest("li");
  if (li) {
    li.classList.toggle("checked");
    saveData();
  }
});

function addTask() {
  const value = inputBox.value.trim();
  if (value === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = value;

  const del = document.createElement("span");
  del.textContent = "x";
  del.classList.add("delete");

  li.appendChild(span);
  li.appendChild(del);
  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
}

function updateCalender() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

showTask();
updateCalender();
