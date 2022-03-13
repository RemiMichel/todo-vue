<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    ...mapActions({
      todo_fetch: "fetch_data"
    })
  },
  created() {
    this.todo_fetch();
  }
}
</script>
