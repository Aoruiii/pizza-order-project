import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="order number"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchOrder;
