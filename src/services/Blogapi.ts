import axios from "axios";

const BlogAPI = {
    getBlog: (para:string) => {
        return axios.get(`https://jsonplaceholder.typicode.com/${para}`);
    }
};

export default BlogAPI;