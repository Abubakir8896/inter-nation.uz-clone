<template>
  <aside>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/user">User</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
</script>

<style scoped>
aside {
  background-color: #2ecc71;
  color: #ffffff;
  padding: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin-bottom: 5px;
}
</style>
