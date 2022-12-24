const app = Vue.createApp({
  data() {
    return {
      messageA: "Finish this course",
      messageB: "<i>Master this course</i>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoals() {
      const random = Math.random();
      if (random < 0.5) {
        return this.messageA;
      } else {
        return this.messageB;
      }
    },
  },
});

app.mount("#user-goal");
