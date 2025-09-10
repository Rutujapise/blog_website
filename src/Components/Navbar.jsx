import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg custom-navbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MyBlog</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/create">Add Blog</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
