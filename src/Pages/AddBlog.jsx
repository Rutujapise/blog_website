import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBlog from '../hook/useBlog';

const AddBlog = () => {
  const { id } = useParams();
  const { addNewBlog, updateBlog, getBlogById } = useBlog();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // If editing, load existing blog data
  useEffect(() => {
    if (id) {
      const blog = getBlogById(id);
      if (blog) {
        setTitle(blog.title);
        setDescription(blog.description);
        setImage(blog.image || '');
      }
    }
  }, [id, getBlogById]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      id: id || Date.now().toString(),
      title,
      description,
      image,
    };

    if (id) {
      updateBlog(id, blogData);
    } else {
      addNewBlog(blogData);
    }

    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>{id ? 'Edit Blog' : 'Add New Blog'}</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Add'} Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
