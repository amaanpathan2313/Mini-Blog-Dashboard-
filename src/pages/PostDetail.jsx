
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css";


const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [author, setAuthor] = useState(null);
  const [authorLoading, setAuthorLoading] = useState(true);
  const [authorError, setAuthorError] = useState(false);

  async function fetchPost() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      if (!response.ok) throw new Error("Failed to fetch post");

      const data = await response.json();
      setPost(data);
      setLoading(false);
    } catch (err) {
      console.log("Error:", err.message);
      setError(true);
      setLoading(false);
    }
  }

  async function fetchAuthor(userId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) throw new Error("Failed to fetch author");

      const data = await response.json();
      setAuthor(data);
      setAuthorLoading(false);
    } catch (err) {
      console.log("Error:", err.message);
      setAuthorError(true);
      setAuthorLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post?.userId) {
      fetchAuthor(post.userId);
    }
  }, [post]);

  if (loading) return <h1>Loading post...</h1>;
  if (error) return <h1>Failed to load post</h1>;

  return (
    <>
      <h2>Post Detail</h2>

      <p>Title : {post.title}</p>
      <p>Description : {post.body}</p>

      <hr style={{height : '1px'}}/>

      <h3>Author</h3>
      {authorLoading && <p>Loading author...</p>}
      {authorError && <p>Author not found</p>}

      {author && (
        <>
          <p>Author Name : {author.name}</p>
          <p>Author Email: {author.email}</p>
        </>
      )}

      <br />
      <Link className="l" to="/">Go Back</Link>
    </>
  );
};

export { PostDetail };
