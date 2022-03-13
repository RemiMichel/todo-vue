<template>
  <div class="home">
    <h2 class="margin-xl">Welcome to the home page</h2>
    <router-link class="col-9 btn btn-main" :to="resolve_route(ROUTES.TODO_HOME)">Todo App</router-link>
    <router-link class="col-9 btn btn-outline-second margin-top-m" :to="resolve_route(ROUTES.ABOUT)">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style>
.home{
  text-align: center;
}
.home>div{
  alignment: center;
}
</style>