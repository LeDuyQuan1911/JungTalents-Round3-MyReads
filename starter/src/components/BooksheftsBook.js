import Books from "./Books";
import { useEffect, useState } from "react";
import BooksAPI, { getAll, update } from "../BooksAPI";
function BooksheftsBook({ shelf }) {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Books shelf={shelf}>
        </Books>
      </ol>
    </div>
  );
}
export default BooksheftsBook;
