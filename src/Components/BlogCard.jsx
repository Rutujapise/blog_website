import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <div className="col-md-4 mb-4">
    <Link to={`/blog/${blog.id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm">
        <img
          src={blog.image || "https://via.placeholder.com/400x200"}
          alt={blog.title}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.description.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BlogCard;
