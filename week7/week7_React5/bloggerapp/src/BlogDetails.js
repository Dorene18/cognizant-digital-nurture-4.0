import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Why React is Awesome", author: "Alice" },
    { id: 2, title: "Using Hooks Effectively", author: "Jeslyn" }
  ];

  return (
    <div>
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
