import axios from "axios";

const BlogAPI = {
    getBlog: () => {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
};

export default BlogAPI;