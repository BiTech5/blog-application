import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogAPI from "../services/Blogapi";
import { iblog } from "../models/blog_model";
const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const [data, SetData] = useState<iblog | null>(null)
    useEffect(() => {
        BlogAPI.getBlog(`${id}`).then(
            (res) => {
                SetData(res.data)
            }).catch((err) => { console.error("Error: ", err) })
    }, [id]);

    return (
        <>
            <h1>{data?.title}</h1>
            <p>{data?.body}</p>
        </>
    );
};

export default Detail;