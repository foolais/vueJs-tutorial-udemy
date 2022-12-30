<template>
  <div>
    <div class="header">
      <h1>Tes</h1>
    </div>
    <ul>
      <friend-contact />
      <friend-contact />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 4567 90",
          email: "manuel@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0123 4567 10",
          email: "julie@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.header {
  width: 90%;
  background-color: #4fc08d;
  color: white;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
}
h2 {
  color: #4fc08d;
  font-size: 2rem;
  border-bottom: 4px solid #4fc08d;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
}
.container {
  width: 90%;
  margin: 2rem auto;
  text-align: center;
  font-weight: bold;
  padding: 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid#ccc;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -ms-border-radius: 15px;
  -o-border-radius: 15px;
}

.container button {
  cursor: pointer;
  border: 2px solid #4fc08d;
  background-color: white;
  color: #4fc08d;
  font-weight: 800;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 0 1rem;
}

.container button:hover,
.container button:active {
  background-color: #4fc08d;
  color: white;
}

.container li {
  font-size: large;
  font-weight: 900;
  color: #4fc08d;
  margin: 1rem;
}
</style>
