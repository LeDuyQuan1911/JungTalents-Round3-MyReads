import ListBooks from "./ListBooks";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <ListBooks title="Current Reading" shelf="currentlyReading" />
      <ListBooks title="Want To Read" shelf="wantToRead" />
      <ListBooks title="Read" shelf="read" />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Home;