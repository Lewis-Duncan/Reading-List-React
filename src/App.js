import React from "react";
import NewBookForm from "./components/BookForm";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContexts";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
