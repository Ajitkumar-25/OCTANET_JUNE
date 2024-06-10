document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const taskDate = document.getElementById("task-date");
  const taskPriority = document.getElementById("task-priority");
  const taskCategory = document.getElementById("task-category");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");
  const filterButtons = document.querySelectorAll(".filter-category");

  // Load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) =>
      createTaskElement(
        task.text,
        task.date,
        task.priority,
        task.category,
        task.complete
      )
    );
  }

  // Save tasks to local storage
  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((li) => {
      tasks.push({
        text: li.querySelector("span").innerText.split(" - ")[0],
        date: li.querySelector("span").innerText.split(" - ")[1],
        priority: li.classList[1],
        category: li.dataset.category,
        complete: li.classList.contains("complete"),
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function createTaskElement(task, date, priority, category, complete = false) {
    const li = document.createElement("li");
    li.className = `task ${priority}`;
    li.dataset.category = category;
    if (complete) li.classList.add("complete");
    li.innerHTML = `
            <span>${task} - ${date}</span>
            <div class="task-actions">
                <button class="complete-task"><i class="fas fa-check"></i></button>
                <button class="delete-task"><i class="fas fa-trash"></i></button>
            </div>
        `;
    taskList.appendChild(li);

    li.querySelector(".complete-task").addEventListener("click", () => {
      li.classList.toggle("complete");
      saveTasks();
    });

    li.querySelector(".delete-task").addEventListener("click", () => {
      taskList.removeChild(li);
      saveTasks();
    });

    saveTasks();
  }

  addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    const date = taskDate.value;
    const priority = taskPriority.value;
    const category = taskCategory.value;

    if (task) {
      createTaskElement(task, date, priority, category);
      taskInput.value = "";
      taskDate.value = "";
      taskPriority.value = "low";
      taskCategory.value = "work";
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      document.querySelectorAll("#task-list li").forEach((li) => {
        if (category === "all" || li.dataset.category === category) {
          li.style.display = "";
        } else {
          li.style.display = "none";
        }
      });
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  loadTasks();
});
