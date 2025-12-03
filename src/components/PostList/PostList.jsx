

import './PostList.css'
import PostCard from '../PostCard/PostCard'
import { useContext } from 'react'
import { ThemeContext } from '../../hooks/useTheme'

const PostList = ({ posts }) => {

let {theme} = useContext(ThemeContext)



  if (!posts || posts.length === 0) {
    return (
      
      <div className="no-posts"
            style={{
          backgroundColor: theme === "light" ? "white" : "#222",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <p>No posts found</p>
      </div>
    )
  }

 
  return (
    <div className="post-list"
          style={{
          backgroundColor: theme === "light" ? "white" : "#222",
          color: theme === "light" ? "black" : "white",
        }}
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList