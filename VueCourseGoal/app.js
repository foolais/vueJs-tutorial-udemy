const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
    };
  },
  methods: {
    addGoals() {
      if (this.enteredValue) {
        this.goals.push(this.enteredValue);
      }
    },
    removeGoals(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#events");
