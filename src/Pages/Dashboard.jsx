import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBlog from "../hook/useBlog";

const Dashboard = () => {
  const { blogs, deleteBlog } = useBlog();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id);
      toast.info("Blog deleted!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Dashboard</h2>
        <Link to="/create" className="btn btn-primary">Add New Blog</Link>
      </div>

      {blogs.length > 0 ? (
        <table className="table table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/blog/${blog.id}`} className="text-decoration-none fw-semibold">
                    {blog.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/edit-blog/${blog.id}`} className="btn btn-success btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(blog.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No blogs yet.</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
