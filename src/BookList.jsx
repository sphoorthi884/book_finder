import BookCard from "./BookCard.jsx";

function BookList({ books }) {
  if (!books.length) return <p>No books found. Try searching!</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {books.map((book) => (
        <BookCard
          key={book.key || `${book.title}-${book.first_publish_year}`}
          book={book}
        />
      ))}
    </div>
  );
}

export default BookList;
