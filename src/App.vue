<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "./services/api";

const users = ref([]);

onMounted(async () => {
  users.value = await getUsers();
});
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="blogger in users.results" :key="blogger.id">{{ blogger.judul }}</li>
    </ul>
  </div>
</template>
