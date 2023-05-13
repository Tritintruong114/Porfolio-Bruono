import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsData } from "./features/fetchDateSlice";
function App() {
  const { blogPosts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div className="text-red-900 font-poppins mx-24">
      {blogPosts.map((post) => {
        return (
          <div key={post.title}>
            <h1 key={post.slug?.current}>{post.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;