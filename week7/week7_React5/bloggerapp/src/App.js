import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [page, setPage] = useState("books");

  const renderComponent = () => {
    if (page === "books") return <BookDetails />;
    else if (page === "blogs") return <BlogDetails />;
    else if (page === "courses") return <CourseDetails />;
    else return <h3>Select a valid page.</h3>;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📘 BloggerApp</h1>

      {/* Navigation buttons */}
      <button onClick={() => setPage("books")}>Show Books</button> &nbsp;
      <button onClick={() => setPage("blogs")}>Show Blogs</button> &nbsp;
      <button onClick={() => setPage("courses")}>Show Courses</button>

      <hr />

      {/* Conditionally rendered component */}
      {renderComponent()}
    </div>
  );
}

export default App;
