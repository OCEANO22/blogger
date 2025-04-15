<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "./services/api";

const blog = ref([]);

onMounted(async () => {
  blog.value = await getUsers();
});
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="blog in blog.results" :key="blog.id">{{ blog.judul }}</li>
    </ul>
  </div>
</template>
