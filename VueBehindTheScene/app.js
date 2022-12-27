const app = Vue.createApp({
  data() {
    return {
      currentInput: "",
      message: "Vue is Vue",
      messageTwo: "Vue not Vue",
    };
  },
  methods: {
    setInput(event) {
      this.currentInput = event.target.value;
    },
    setMessage() {
      this.message = this.currentInput;
      this.messageTwo = this.$refs.userText.value;
    },
  },
});

app.mount("#main");
