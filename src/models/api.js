
import axios from "axios";


export default class {

    async get(url){
        let response = await axios.get(url);
        return response.data
    }
    async put(url, data){
        let response = await axios.put(url, data);
        return response.data
    }
    async post(url, data){
        let response = await axios.post(url, data);
        return response.data
    }
    async delete(url){
        let response = await axios.delete(url);
        return response.data
    }

}