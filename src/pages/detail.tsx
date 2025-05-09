import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogAPI from "../services/Blogapi";
import { iblog } from "../models/blog_model";
import Comment from "../components/comments";
import { Loading } from "../components/loading_skeleton";
const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const [loading, SetLoading] = useState(true)
    const [data, SetData] = useState<iblog | null>(null)
    useEffect(() => {
        BlogAPI.getBlog(`posts/${id}`).then(
            (res) => {
                SetData(res.data)
                SetLoading(false)
            }).catch((err) => { console.error("Error: ", err) })
    }, [id]);

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    {loading ? <Loading /> :
                        <>

                            <img
                                src={`https://picsum.photos/200/300?random=${id}`}
                                className="max-w-sm rounded-lg shadow-2xl"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">{data?.title}</h1>
                                <p className="py-6">
                                    {data?.body}
                                </p>

                            </div>
                        </>
                    }
                </div>
            </div>
            <Comment />
        </>
    );
};

export default Detail;