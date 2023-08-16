import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, newTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={newTitle} />
      <button className="bitton is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
