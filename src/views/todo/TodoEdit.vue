<template>
  <div class="col-9" style="margin-right: auto; margin-left: auto">
    <div class="background-color-background card margin-s" style="text-align: left">
      <div class="card-body">
        <form @submit.prevent="update_todos()">
          <h5 class="card-title margin-bottom-s">
            <input class="form-control-lg col-9" type="text" v-model:value="label" placeholder="What a wonderful todo...">
          </h5>
        </form>
        <button v-if="id" class="todo-span margin-top-s margin-right-sm btn btn-sm btn-main-danger" v-on:click="remove()">
          <i class="fa fa-trash"></i>
        </button>
<!--        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>-->
<!--        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's-->
<!--          content.</p>-->
        <button class="btn btn-second margin-right-s" v-on:click="cancel()"><i class="fa fa-backward"></i></button>
        <button class="btn btn-main margin-right-s" v-on:click="update_todos()"><i class="fa fa-save"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'TodoEdit',
  data() {
    return {
      id: "",
      label: "",
      status: 0,
    }
  },
  computed: {
    ...mapGetters(["get_one_by_id"])
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      let todo = this.get_one_by_id(this.$route.params.id);
      this.label = todo.label
      this.status = todo.status
    }
  },
  methods: {
    ...mapActions({
      addTodo: 'add',
      updateTodo: 'update'
    }),
    update_todos() {
      if(this.label){
        if (this.id) {
          this.updateTodo({id: this.id, label: this.label, status: this.status});
        } else {
          this.addTodo({label: this.label, status: this.status});
        }
      }
      this.$router.push(this.resolve_route(this.ROUTES.TODO_HOME));
    },
    cancel() {
      this.$router.push(this.resolve_route(this.ROUTES.TODO_HOME));
    },
    remove() {
      this.updateTodo({
        id: this.id,
        label: this.label,
        status: 2
      });
      this.$router.push(this.resolve_route(this.ROUTES.TODO_HOME));
    },
  },
}
</script>
<style>
.todo-span {
  position: absolute;
  right: 0;
  top: 0;
}
</style>