import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsData } from "./features/fetchDateSlice";
function App() {
  const { blogPosts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
    console.log(blogPosts);
  }, [dispatch]);

  return (
    <div className="text-red-900 font-poppins mx-24">
      {blogPosts.map((post) => {
        return <h1 key={post.slug.current}>{post.slug.current}</h1>;
      })}
    </div>
  );
}

export default App;
