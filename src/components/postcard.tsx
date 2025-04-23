import BlogAPI from "../services/Blogapi";
import { useEffect, useState } from "react";
import { iblog } from "../models/blog_model";
// this cards component fetch data from blogapi and show in responsive grid layout
const Cards = () => {
    const [posts, SetPost] = useState<iblog[] | null>(null);

    useEffect(
        () => {
            BlogAPI.getBlog().then(
                (res) => {
                    console.log(res.data)
                    SetPost(res.data);
                }
            ).catch((err) => { console.error("Error: ", err) })
        }, []
    )
    return (
        
        <div  className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts ? posts.slice(0,6).map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-sm max-w-xs sm:max-w-sm md:max-w-md">
            <figure>
              <img
                src={`https://picsum.photos/200/300?random=${post.id}`}
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        )) : <p>Data Not found</p>}
      </div>
      

    )
}

export default Cards;