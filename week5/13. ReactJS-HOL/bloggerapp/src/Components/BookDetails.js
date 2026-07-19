import React from 'react';

function BookDetails({ books }) {
  return (
    <div>
      <h2>Book Details</h2>

      {/* Conditional Rendering Technique: Logical && operator */}
      {books.length === 0 && <p>No books available at the moment.</p>}

      {/* Conditional Rendering Technique: Ternary operator */}
      {books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>{book.title} by {book.author}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default BookDetails;