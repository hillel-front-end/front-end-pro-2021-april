const config = {
  el: "#app",
  //   data: {}
};

Vue.component("students", {
  props: ["studentsList"],
  template: `
        <div class="students">
           <section class="student" v-for="student in studentsList">{{ student.name }}</section>
        </div>
    `,
});

Vue.component("add-student", {
  data: () => ({
    student: {
      name: "",
    },
  }),
  methods: {
    onClick() {
      //   console.log("add - рыба мечь", this.student);
      this.$emit("add", {
        ...this.student,
      });
      this.clear();
    },
    clear() {
      this.student.name = "";
    },
  },
  template: `
        <div class="add-student">
            <label>Add student </label>
            <input v-model="student.name"  name="firstName"/>
            <button @click="onClick"> add </button>
        </div>
    
    `,
});

Vue.component("students-block", {
  data() {
    return {
      welcome: "welcome",
      students: [{ name: "Valera" }, { name: "Pety" }, { name: "Alex" }],
    };
  },
  methods: {
    onAdd(student) {
      this.students.push(student);
    },
  },
  template: `
        <div class="students-block">
            <students :studentsList="students" />
            <add-student @add="onAdd" />
        </div>
    `,
});

const vue = new Vue(config);
