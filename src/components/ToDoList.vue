<template>
  <div class="container">
    <h2 class="text-center">To Do List</h2>

    <!--Input-->
    <div class="d-flex">
      <input
        v-model="task"
        type="text"
        placeholder="Enter task"
        class="form-control"
      />
      <button @click="AddTask" class="btn rounded-0">SUBMIT</button>
    </div>

    <!--tasks-->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <th>{{ task.name }}</th>
          <th>
            <span @click="changeStatus(index)" style="cursor: pointer">
              {{ task.status }}
            </span>
          </th>
          <th>
            <button class="btn" @click="editTask(index)">edit</button>
          </th>
          <th>
            <button class="btn" @click="deleteTask(index)">delete</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ToDoList.vue",
  data() {
    return {
      editTaskName: null,
      taskStatus: ["to-do", "in-progress", "done"],
      task: "",
      tasks: [
        {
          name: "Lau nha",
          status: "to-do",
        },
        {
          name: "Do rac",
          status: "in-progress",
        },
      ],
    };
  },
  methods: {
    AddTask() {
      if (this.task.length === 0) return;

      if (this.editTaskName === null) {
        this.tasks.push({
          name: this.task,
          status: "to-do",
        });
      } else {
        this.tasks[this.editTaskName].name = this.task;
        this.editTaskName = null;
      }
    },

    deleteTask(index) {
      console.log(index);
      this.tasks.splice(index, 1);
    },

    editTask(index) {
      this.task = this.tasks[index].name;
      this.editTaskName = index;
      console.log(this.task);
    },

    changeStatus(index) {
      let statusIndex = this.taskStatus.indexOf(this.tasks[index].status);
      if (++statusIndex > 2) statusIndex = 0;
      this.tasks[index].status = this.taskStatus[statusIndex];
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
