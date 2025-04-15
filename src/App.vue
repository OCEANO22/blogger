<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "./services/api";

const users = ref([]);

onMounted(async () => {
  blogs.value = await getUsers();
});
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="blog in blogs.results" :key="blog.id">{{ blog.judul }}</li>
    </ul>
  </div>
</template>
