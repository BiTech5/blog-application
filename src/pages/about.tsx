const About = () => {
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://picsum.photos/200/300?random=33"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to MyBlog</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente, explicabo modi praesentium voluptas aliquam optio voluptatum quas laboriosam commodi, ex dolorem assumenda, vitae unde dolor fugit fugiat magni quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio culpa autem a nihil sapiente deleniti distinctio ex porro corrupti numquam quis adipisci maiores dolorum sunt iste aliquid aperiam, vel inventore nulla saepe rerum vitae fugit. A est distinctio commodi dolorum sit pariatur voluptate.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About;