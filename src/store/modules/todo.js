import Api from "../../models/api"

export default {
    state: {
        search:"",
        status_filters: [0],
        todolist: [],
        api: new Api()
    },
    getters:{
        get_one_by_id : (state) => (id) => {
            for (let todo of state.todolist) {
                if(todo.id === parseInt(id)){
                    return todo
                }
            }
        },
        has_status_filter : (state) => (status) => {

            for (let item of state.status_filters) {
                if(item === status){
                    return true;
                }
            }
            return false;
        },
        in_todo_search : (state) => (search) => {
            for (let item of state.todolist) {
                if(item.label.indexOf(search)){
                    return true;
                }
            }
            return false;
        }
    },
    mutations: {
        toggle_status_filter(state, status){
            if(state.status_filters.includes(status)){
                state.status_filters = state.status_filters.filter(item => item !== status)
            }else{
                state.status_filters.push(status)
            }
        },
        add_todo(state, todo){
            state.todolist.push(todo);
        },
        set_search(state, search){
            state.search = search;
        },

        update_todo(state, updated_todo){
            let new_list = [];
            for (let todo of state.todolist) {
                if(todo.id === parseInt(updated_todo.id)){
                    new_list.push(updated_todo);
                }else{
                    new_list.push(todo);
                }
            }
            state.todolist = new_list;
        },
        set_todos_list(state, todos){
            state.todolist = [];
            for (let todo of todos) {
                state.todolist.push(todo)
            }
        },
    },

    actions: {
        async fetch_data({ commit, state }){
            let todos = await state.api.get('/todos');
            commit('set_todos_list', todos);
        },
        async add({commit, state}, todo){
            let todo_result = await state.api.post("/todos", todo)
            commit('add_todo', todo_result)
        },
        async update({commit, state}, todo){
            let todo_result = await state.api.put("/todo/" + todo.id, todo);
            commit('update_todo', todo_result)
        },
        set_status_filter({commit, state}, status){
            commit('toggle_status_filter', status)
        },
        search_in_todo({commit, state}, search){
            commit('set_search', search)
        }
    }
}