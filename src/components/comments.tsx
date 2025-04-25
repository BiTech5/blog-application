import BlogAPI from "../services/Blogapi";
import { iComments } from "../models/comment_model";
import { useState, useEffect } from "react";
const Comment = () => {
    const [comments, SetComment] = useState<iComments[] | null>(null)
    useEffect(
        () => {
            BlogAPI.getBlog("comments/").then(
                (res) => {
                    SetComment(res.data)
                }
            ).catch(
                (err) => { console.error(err, " Fetching Comments") }
            )
        }, []
    )
    return (
        <div className=" mx-14 py-6">

            <h1 className="text-5xl font-bold">Comment</h1>


            <textarea typeof="text" placeholder="Comment here" className="textarea textarea-primary textarea-xl w-full m-5 "></textarea>

            <div className="flex justify-end">
                <button className="btn btn-info">Comment</button>
            </div>

            <p className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most Recents Comments</p>
            {comments ? comments.slice(0, 4).map((comment) => (
                <ul className="list bg-base-100 rounded-box shadow-md">
                    <li className="list-row">
                        <div><img className="size-10 rounded-box" src={`https://picsum.photos/200/300?random=${comment.id}`}  alt="profile pic"/></div>
                        <div>
                            <div>{comment.name}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{comment.email}</div>
                        </div>
                        <p className="list-col-wrap text-xs">
                            {comment.body}
                        </p>

                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </button>
                    </li>
                </ul>
            )) :
                <div role="alert" className="alert alert-info">
                    <span>No Comments</span>
                </div>}
        </div>
    )
}

export default Comment;