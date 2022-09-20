import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHookExample() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomHookExample;
