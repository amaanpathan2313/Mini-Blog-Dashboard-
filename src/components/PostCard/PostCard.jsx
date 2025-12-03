
import './PostCard.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../hooks/useTheme';

const PostCard = ({ post }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`post-card ${theme}`}>
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
      </div>
      <p className="post-body">{post.body}</p>
      <div className="post-footer">
        <Link to={`/postdetail/${post.id}`}>View More</Link>
      </div>
    </div>
  );
};

export default PostCard;
