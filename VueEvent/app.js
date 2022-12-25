const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
    },
    setName(event, firstName) {
      this.name = firstName + " " + event.target.value;
    },
    submitForm() {
      alert("halo");
    },
    confirmInputName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
