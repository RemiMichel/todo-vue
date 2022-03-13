<template>
  <div class="todo-controls width-s">
    <router-link class="btn btn-main margin-xs height-sm" style="padding:  7px 0 0 0" :to="resolve_route(ROUTES.TODO_CREATE)">
      <i class="fa fa-plus-circle text-color-background"></i>
    </router-link>
    <div class="btn-group-vertical margin-xs width-sm">
      <button :class="has_status_filter(0) ? 'btn btn-sm btn-second':'btn btn-sm btn-outline-second'" v-on:click="set_status_filter(0)">
        <i class="fa fa-dot-circle"></i>
      </button>
      <button :class="has_status_filter(1) ? 'btn btn-sm btn-main':'btn btn-sm btn-outline-main'" v-on:click="set_status_filter(1)" style="z-index: 10">
        <i class="fa fa-check-circle"></i>
      </button>
      <button :class="has_status_filter(2) ? 'btn btn-sm btn-main-danger':'btn btn-sm btn-outline-main-danger'" v-on:click="set_status_filter(2)">
        <i class="fa fa-times-circle"></i>
      </button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'TodoControls',
  computed: {
    ...mapGetters(["has_status_filter"]),
  },
  methods:{
    ...mapActions(["set_status_filter"])
  }
}
</script>
<style>
.todo-controls{
  position: fixed;
  left: 0;
}
</style>
