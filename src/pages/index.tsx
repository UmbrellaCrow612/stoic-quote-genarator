import React, { useState, useEffect } from "react";

const Home = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("/api/authors");
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      <pre>{JSON.stringify(authors, null, 2)}</pre>
    </div>
  );
};

export default Home;
