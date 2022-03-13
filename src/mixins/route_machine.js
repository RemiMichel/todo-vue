import routes from '../router/routes'

/**
 * A routing generalisation
 */
export default {
    data(){
        return {
            ROUTES: routes
        }
    },
    methods:{
        resolve_route(route, ...args){
            return this.resolve_route_by_path(route.path, ...args)
        },
        resolve_route_by_path(path, ...args){
            let split_path = path.split('/').filter(element => element !== '');
            let tmp = [];
            let i = 0;
            for (let element of split_path) {
                if(element.startsWith(':')){
                    tmp.push(args[i])
                    i++
                }else{
                    tmp.push(element)
                }
            }
            return '/' + tmp.join('/')
        }
    }
}