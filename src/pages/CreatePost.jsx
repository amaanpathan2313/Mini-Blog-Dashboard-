
import { useContext, useEffect, useState } from "react";
import { userposts } from "../hooks/useFetch";
import "./CreatePost.css";

const CreatePost = () => {
  const { users, fetchUser, setData , data} = useContext(userposts);

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    author: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if(!newPost.title){
        alert("Please Enter Title !");
        return;
    }
    if(!newPost.body){
        alert("Please Enter content ! ");
        return;
    }
    if(!newPost.author){
        alert("Please select author !");
        return;
    }

    console.log(newPost);
    
    alert("New Post sucessfully add");
    setData.apiData.unshift(newPost);
    console.log(data.apiData.length)
    setNewPost({
      title: "",
      body: "",
      author: "",
    });
  }

  return (
    <>
    <div className="container-box">

      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit} className="create-post-form">
        
        <input
          type="text"
          placeholder="Enter post title"
          value={newPost.title}
          onChange={(e) =>
            setNewPost({ ...newPost, title: e.target.value })
          }
        />

        <textarea
          placeholder="Enter post content"
          value={newPost.body}
          onChange={(e) =>
            setNewPost({ ...newPost, body: e.target.value })
          }
        />

        <select
          value={newPost.author}
          onChange={(e) =>
            setNewPost({ ...newPost, author: e.target.value })
          }
        >
          <option value="">Select Author</option>
          {users.length > 0 &&
            users.map((name, index) => (
                <option key={index} value={name}>
                {name}
              </option>
            ))}
        </select>

        <button type="submit">Create Post</button>
      </form>
            </div>
    </>
  );
};

export default CreatePost;
