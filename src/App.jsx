import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import BookList from "./BookList.jsx";

function App() {
  const [books, setBooks] = useState([]);

  const searchBooks = async (query) => {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setBooks(data.docs.slice(0, 20)); // top 20 results
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;
