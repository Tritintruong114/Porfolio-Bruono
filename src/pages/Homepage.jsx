import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsData } from "./../features/fetchDateSlice";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { blogPosts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div>
      {blogPosts.map((post) => {
        return (
          <>
            <div key={post.title}>
              <Link to={`blog/${post.slug.current}`}>
                <h1 key={post.slug?.current}>{post.title}</h1>
                <p>{post.publishedAt}</p>
                <img src={post.mainImage.asset.url}></img>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Homepage;
