<template>
  <div class="background-color-background card col-m-10 margin-s" style="text-align: left">
    <div class="card-body">
      <h5 class="card-title">
<!--        <span v-if="todo.status === 0" class="badge background-color-second text-color-background margin-right-xs">todo</span>-->
        <span v-if="todo.status === 1" class="badge background-color-main margin-right-xs">done</span>
        <span v-if="todo.status === 2" class="badge background-color-3 margin-right-xs">deleted</span>
        <span v-if="todo.status === 1" class="badge stroke-text text-color-main margin-right-xs">{{ todo.label }}</span>
        <span v-else-if="todo.status === 2" class="badge stroke-text text-color-3">{{ todo.label }}</span>
        <span v-else class="text-color-second">{{ todo.label }}</span>
        <span class="todo-span margin-right-s">
            <router-link v-if="todo.status === 0" class="btn btn-sm btn-second"
                         :to="resolve_route(ROUTES.TODO_EDIT, todo.id)"><i class="fa fa-edit"></i></router-link>
            <button v-if="todo.status === 0" class="btn btn-sm btn-main margin-xs" v-on:click="done()"><i
                class="fa fa-check"></i></button>
            <button v-if="todo.status === 1" class="btn btn-sm btn-main-danger" v-on:click="remove()"><i
                class="fa fa-trash"></i></button>
            <button v-if="todo.status === 1" class="btn btn-sm btn-second margin-xs" v-on:click="undone()"><i
                class="fa fa-redo"></i></button>
            <button v-if="todo.status === 2" class="btn btn-sm btn-main margin-xs" v-on:click="undone()"><i
                class="fa fa-redo"></i></button>
          </span>
      </h5>
<!--      <h6 class="card-subtitle mb-2 text-muted">-->
<!--        Card subtitle-->
<!--      </h6>-->
<!--      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's-->
<!--        content.</p>-->
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    ...mapActions(['update']),
    done() {
      this.update({
        id: this.todo.id,
        label: this.todo.label,
        status: 1
      })
    },
    undone() {
      this.update({
        id: this.todo.id,
        label: this.todo.label,
        status: 0
      })
    },
    remove() {
      this.update({
        id: this.todo.id,
        label: this.todo.label,
        status: 2
      })
    }
  }
}
</script>
<style>
.todo-span {
  position: absolute;
  right: 0;
}
</style>
