import { useParams, Link } from 'react-router-dom';
import useBlog from '../hook/useBlog';

const BlogDetails = () => {
  const { id } = useParams();
  const { getBlogById } = useBlog();
  const blog = getBlogById(id);

  if (!blog) return <p className="container mt-5">Blog not found.</p>;

  return (
    <div className="container mt-5">
      <h2>{blog.title}</h2>
      {blog.image && <img src={blog.image} alt={blog.title} className="img-fluid mb-3 rounded shadow" />}
      <p>{blog.description}</p>
      <Link to={`/edit-blog/${blog.id}`} className="btn btn-warning me-2">Edit</Link>
      <Link to="/" className="btn btn-secondary">Back to Dashboard</Link>
    </div>
  );
};

export default BlogDetails;
