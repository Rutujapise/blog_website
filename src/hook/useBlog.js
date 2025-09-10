import { useState } from 'react';

const useBlog = () => {
  const getBlogs = () => JSON.parse(localStorage.getItem('blogs')) || [];

  const [blogs, setBlogs] = useState(getBlogs());

  const saveBlog = (b) => {
    localStorage.setItem('blogs', JSON.stringify(b));
    setBlogs(b);
  };

  const addNewBlog = (data) => {
    const updated = [...getBlogs(), data];
    saveBlog(updated);
  };

  const updateBlog = (id, updatedData) => {
    const updated = getBlogs().map(blog =>
      String(blog.id) === String(id) ? updatedData : blog
    );
    saveBlog(updated);
  };

  const getBlogById = (id) => {
    return getBlogs().find(blog => String(blog.id) === String(id));
  };

  const deleteBlog = (id) => {
  const updated = getBlogs().filter((blog) => blog.id !== id);
  saveBlog(updated);
  setBlogs(updated);
  };

  return { blogs, getBlogs, addNewBlog, updateBlog, getBlogById, deleteBlog };
};

export default useBlog;
