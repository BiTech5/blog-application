import BlogAPI from "../services/Blogapi";
import { useEffect, useState } from "react";
import { iblog } from "../models/blog_model";
// this cards component fetch data from blogapi and show in responsive grid layout
import { Link } from "react-router-dom";
const Cards = () => {
  const [posts, SetPost] = useState<iblog[] | null>(null);

  useEffect(
    () => {
      BlogAPI.getBlog('posts/').then(
        (res) => {
          // console.log(res.data)
          SetPost(res.data);
        }
      ).catch((err) => { console.error("Error: ", err) })
    }, []
  )
  return (
    <>
      <h1 className=" text-3xl font-bold">Blog</h1>
      <div className="flex justify-center">

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts ? posts.slice(0, 6).map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-sm max-w-xs sm:max-w-sm md:max-w-md">
              <figure>
                <img
                  src={`https://picsum.photos/200/300?random=${post.id}ll`}
                  alt="blog-img"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                  <Link className="btn btn-primary" to={`/posts/${post.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          )) : <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Data Not Found</span>
          </div>}
        </div>
      </div>

    </>


  )
}

export default Cards;