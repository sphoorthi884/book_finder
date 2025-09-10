function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
      <img src={coverUrl} alt={book.title} style={{ width: "100%" }} />
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
      <p>{book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookCard;
