import Home from "../views/Home";
import TodoHome from "../views/todo/TodoHome";
import TodoEdit from "../views/todo/TodoEdit";
import TodoList from "../components/TodoList";

/**
 * routes declaration
 */
export default {
    HOME: {
        path: '/',
        name: 'Home',
        component: Home
    },
    TODO_HOME: {
        path: '/todo',
        component: TodoHome,
        // KEEP THAT NAME !
        name: "Todo",
        children:[
            { path: '',name:'List', component: TodoList },
            {
                path: ':id/edit',
                name: 'Edit',
                component: TodoEdit
            },
            {
                path: 'create',
                name: 'Create',
                component: TodoEdit
            }
        ]
    },
    TODO_EDIT: {
        path: '/todo/:id/edit',
        name: 'Edit',
        component: TodoEdit
    },
    TODO_CREATE: {
        path: '/todo/create',
        name: 'Create',
        component: TodoEdit
    },
    ABOUT: {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

}