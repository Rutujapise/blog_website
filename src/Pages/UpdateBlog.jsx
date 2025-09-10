import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useBlog from '../hook/useBlog';

const UpdateBlog = () => {
  const { id } = useParams();   // use lowercase "id" for consistency
  const navigate = useNavigate();
  const { getBlogById, updateBlog } = useBlog();
  const blog = getBlogById(id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setImage(blog.image || '');
    }
  }, [blog]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBlog(id, { id, title, description, image });
    navigate('/');
  };

  if (!blog) return <p className="container mt-5">Blog not found</p>;

  return (
    <div className="container mt-5">
      <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={e => setImage(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
