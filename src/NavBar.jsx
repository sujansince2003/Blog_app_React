const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Sujan Blogs</h1>
            <div className="links">
                <a className="btn-home" href="/">Home</a>
                <a className="btn-create" href="/create">Create new Blog</a>
            </div>
        </nav>
      );
}
 
export default NavBar;