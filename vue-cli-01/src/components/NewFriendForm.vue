<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="newFriendData.enteredName" required />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="newFriendData.enteredPhone" required />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="newFriendData.enteredEmail" required />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      newFriendData: {
        enteredName: "",
        enteredPhone: "",
        enteredEmail: "",
      },
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.newFriendData);
    },
  },
};
</script>
