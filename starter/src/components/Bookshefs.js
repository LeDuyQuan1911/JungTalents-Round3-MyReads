import BooksheftsBook from "./BooksheftsBook";
import BooksheftsTitle from "./BooksheftsTitle";
import BooksAPI, { get,getAll } from "../BooksAPI"
import { useEffect, useState } from "react";

function Bookshefts({title,shelf}){

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
              <BooksheftsBook shelf={shelf} />
              </div>
    )
}
export default Bookshefts