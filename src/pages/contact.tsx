const Contact=()=>{
    return (
        <>
        <div className="bg-white/50 w-full h-screen">
            <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea placeholder="Enter your message" className="textarea textarea-bordered w-full"></textarea>
                </div>
                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Contact;