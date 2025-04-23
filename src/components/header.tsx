const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar bg-base-100 shadow-md px-4">
                    {/* Mobile navbar */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li><a href="/">Home</a></li>
                                <li>
                                    <a>Categories</a>
                                    <ul className="p-2">
                                        <li><a href="/category/tech">Tech</a></li>
                                        <li><a href="/category/lifestyle">Lifestyle</a></li>
                                        <li><a href="/category/news">News</a></li>
                                    </ul>
                                </li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <a href="/" className="btn btn-ghost text-xl font-bold">MyBlog</a>
                    </div>

                    {/* desktop site navbar */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/">Home</a></li>
                            <li>
                                <details>
                                    <summary>Categories</summary>
                                    <ul className="p-2">
                                        <li><a href="/category/tech">Tech</a></li>
                                        <li><a href="/category/lifestyle">Lifestyle</a></li>
                                        <li><a href="/category/news">News</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>


                    <div className="navbar-end gap-2">
                        <input type="text" placeholder="Search..." className="input input-bordered input-sm hidden md:inline-block w-36" />
                        <a href="/subscribe" className="btn btn-primary btn-sm">Subscribe</a>
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Header;