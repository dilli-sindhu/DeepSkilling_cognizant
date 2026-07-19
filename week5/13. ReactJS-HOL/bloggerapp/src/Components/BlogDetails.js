import React from 'react';

function BlogDetails({ blogs }) {
  // Conditional Rendering Technique: Element variable (if-else assigns JSX to a variable)
  let content;
  if (blogs.length === 0) {
    content = <p>No blog posts published yet.</p>;
  } else {
    content = (
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title} — {blog.author}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Blog Details</h2>
      {content}
    </div>
  );
}

export default BlogDetails;