export async function getUsers() {
  const response = await fetch("https://adam-vue.n-oceano22.workers.dev/api/blogs");
  return await response.json();
}
