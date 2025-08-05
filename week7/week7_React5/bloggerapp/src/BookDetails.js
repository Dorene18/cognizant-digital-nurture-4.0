import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "React for Beginners", author: "Dan Abramov" },
    { id: 2, title: "Learning JavaScript", author: "Kyle Simpson" }
  ];

  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
