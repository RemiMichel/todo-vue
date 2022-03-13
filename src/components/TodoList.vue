<template>
  <div class="col-9" style="margin-right: auto; margin-left: auto">
    <div class="input-group margin-bottom-s">
      <input v-model:value="search" type="text" class="form-control" placeholder="Search..." aria-describedby="button-addon">
      <button class="btn btn-main" type="button" id="button-addon"><i class="fa fa-search"></i></button>
    </div>
    <TodoControls />
    <Todo v-if="has_status_filter(todo.status) && search_contains(todo.label)" v-for="(todo, index) in todolist" :todo="todo" :key="index"></Todo>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import Todo from "./Todo";
import TodoControls from "./TodoControls";

export default {
  name: 'TodoList',
  components:{
    Todo,
    TodoControls
  },
  data(){
    return{
      search:""
    }
  },
  computed:{
    ...mapGetters([
        "has_status_filter",
        "in_todo_search",
    ]),
    ...mapState({
      todolist: (state) => state.todo.todolist,
    })
  },
  methods:{
    search_contains(label){
      return (label.includes(this.search) || this.search === '')
    },
      ...mapActions(["search_in_todo"])
  }
}
</script>
