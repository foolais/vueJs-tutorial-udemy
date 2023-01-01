<template>
  <li class="container">
    <h2>{{ name }}</h2>
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
  props: ["name", "phoneNumber", "email"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
