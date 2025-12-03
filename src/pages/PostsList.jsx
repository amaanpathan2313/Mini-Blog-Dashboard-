 import React, { useContext, useEffect, useState } from "react";
import { userposts } from "../hooks/useFetch";
import PostList from "../components/PostList/PostList";
import "./PostsList.css";
import { ThemeContext } from "../hooks/useTheme";

const PostsList = () => {
  const { data, fetchData } = useContext(userposts);
  const { theme } = useContext(ThemeContext);

  const [title, setTitle] = useState("");
  const [postArray, setPostsArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.apiData) {
      setPostsArray(data.apiData);
    }
  }, [data.apiData]);

  if (data.loading) return <h1>Loading...</h1>;
  if (data.error) return <h1>Something Went Wrong...</h1>;

  function onSearch() {
    if (!title.trim()) {
      alert("Search box cannot be empty!");
      return;
    }

    const filtered = data.apiData.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );

    setPostsArray(filtered);
  }

  function sortBy(value) {
    if (!value) return;

    const sorted = [...postArray];

    if (value === "accending") {
      sorted.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    }

    if (value === "decending") {
      sorted.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
    }

    setPostsArray(sorted);
  }

  return (
    <>
      <div
        className={`nav2 ${theme === "light" ? "light" : "dark"}`}
      >
        <h2>All Posts</h2>

        <div>
          <input
            type="text"
            placeholder="Search By Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={onSearch}>Search</button>

          <select onChange={(e) => sortBy(e.target.value)}>
            <option value="">Sort By Title</option>
            <option value="accending">A-Z</option>
            <option value="decending">Z-A</option>
          </select>
        </div>
      </div>

      <PostList posts={postArray} />
    </>
  );
};

export { PostsList };
