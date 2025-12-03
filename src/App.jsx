import { Route, Routes } from "react-router-dom";
import { PostsList } from "./pages/PostsList";
import { PostDetail } from "./pages/PostDetail";
import Layout from "./components/Layout/Layout";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Layout>
        
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
          <Route path="/create" element={ <CreatePost />} />
        </Routes>
      
      </Layout>
    </>
  );
}

export default App;
