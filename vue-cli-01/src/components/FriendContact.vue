<template>
  <li class="container">
    <h2>{{ name }} {{ isFavorite ? "(Fav)" : "" }}</h2>
    <button @click="toogleFriendFav">
      {{ isFavorite ? "Remove" : "Add" }} Favorite
    </button>
    <button @click="toogleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone :</strong> {{ phoneNumber }}</li>
      <li><strong>Email :</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "email", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toogle-favorite"],
  // emits: {
  //   "toogle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("id missing");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendFavorite: this.isFavorite,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toogleFriendFav() {
      this.$emit("toogle-favorite", this.id);
    },
  },
};
</script>
