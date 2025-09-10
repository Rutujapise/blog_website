import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">About MyBlog</h1>
        <p className="text-muted">
          Welcome to <span className="fw-semibold">MyBlog</span>, a place where
          ideas, stories, and knowledge come alive. Our mission is to empower
          writers and readers by providing a simple yet powerful blogging
          platform.
        </p>
      </div>

      {/* Static Image */}
      <div className="text-center mb-5">
        <img
          src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
          alt="About MyBlog"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Benefits Section */}
      <div className="mb-5">
        <h2 className="fw-bold mb-3">🌟 Benefits of MyBlog</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">✔ Share your thoughts with the world</li>
          <li className="list-group-item">✔ Connect with a like-minded community</li>
          <li className="list-group-item">✔ Easy to use and beginner-friendly</li>
          <li className="list-group-item">✔ Write, edit, and manage blogs anytime</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mb-5">
        <h2 className="fw-bold mb-3">⚡ Features</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100 text-center p-3">
              <h5 className="fw-semibold">📝 Add & Edit Blogs</h5>
              <p className="text-muted">
                Easily create and update blogs with a clean interface.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100 text-center p-3">
              <h5 className="fw-semibold">📸 Image Support</h5>
              <p className="text-muted">
                Add images to make your blogs more attractive and engaging.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100 text-center p-3">
              <h5 className="fw-semibold">🎥 Video Content</h5>
              <p className="text-muted">
                Embed videos inside your blog posts to share rich content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Video */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">🎬 Watch Our Intro Video</h2>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="MyBlog Intro Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-5">
        <h2 className="fw-bold mb-3">📩 Contact Us</h2>
        <form className="shadow p-4 rounded bg-light">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default About;
