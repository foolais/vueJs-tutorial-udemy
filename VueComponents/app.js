const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@gmail.com",
        },
        {
          id: 2,
          name: "Julie Jones",
          phone: "1998 7654 321",
          email: "julie@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-details", {
  template: `
  <div class="container">
    <h2>{{friend.name}}</h2>
    <button @click="toogleButton">
      {{btnDetailStatus ? "Show" : "Hide"}} Details
    </button>
    <div v-if="!btnDetailStatus">
      <p>{{friend.phone}}</p>
      <p>{{friend.email}}</p>
    </div>
  </div>
  `,
  data() {
    return {
      btnDetailStatus: true,
      friend: {
        id: 1,
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@gmail.com",
      },
    };
  },
  methods: {
    toogleButton() {
      this.btnDetailStatus = !this.btnDetailStatus;
    },
  },
});

app.mount("#main");
