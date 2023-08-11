import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import Books from "./Books";

function SearchBookResult({ title, numberOfBook }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let isMounted = true;
  
    if (title !== "") {
      search(title, numberOfBook)
        .then((res) => {
          if (isMounted) {
            setBooks(res);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setBooks([]);
    }
  
    return () => {
      isMounted = false;
    };
  }, [title, numberOfBook]);
  
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books && books.length > 0 ? (
          <Books search={books} shelf="none" ></Books>
        ) : (
          <p>No books found.</p>
        )}
      </ol>
    </div>
  );
}

export default SearchBookResult;
