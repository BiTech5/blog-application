import { NavLink } from "react-router-dom";
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
                                <li><NavLink to="/">Home</NavLink></li>
                                <li>
                                    <NavLink to="/">Categories</NavLink>
                                    <ul className="p-2">
                                        <li><NavLink to="/category/tech">Tech</NavLink></li>
                                        <li><NavLink to="/category/lifestyle">Lifestyle</NavLink></li>
                                        <li><NavLink to="/category/news">News</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost text-xl font-bold">MyBlog</NavLink>
                    </div>

                    {/* desktop site navbar */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <details>
                                    <summary>Categories</summary>
                                    <ul className="p-2">
                                        <li><NavLink to="/category/tech">Tech</NavLink></li>
                                        <li><NavLink to="/category/lifestyle">Lifestyle</NavLink></li>
                                        <li><NavLink to="/category/news">News</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>


                    <div className="navbar-end gap-2">
                        <input type="text" placeholder="Search..." className="input input-bordered input-sm hidden md:inline-block w-36" />
                        <NavLink to="/subscribe" className="btn btn-primary btn-sm">Subscribe</NavLink>
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Header;