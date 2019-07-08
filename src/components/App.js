import React from "react";
import BookList from "../containers/booklist";
import BookDetail from "../containers/book-detail";

const App = () => {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
}

export default App
