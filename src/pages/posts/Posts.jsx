import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsData } from "../../features/fetchDateSlice";
import { Link } from "react-router-dom";

const Posts = () => {
  const { blogPosts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div className="grid md:grid-cols-2">
      {blogPosts.map((post) => {
        return (
          <>
            <div key={post.title}>
              <Link to={`${post.slug?.current}`}>
                <h1 className="font-bold text-xl" key={post.slug?.current}>
                  {post.title}
                </h1>
                <div className="flex w-full">
                  <img className="rounded-full h-12" src={post.author?.image} />
                  <div className="flex items-center gap-3">
                    <p>{post.author?.name}</p>
                    <p className="text-xs">{post.publishedAt}</p>
                  </div>
                </div>

                <img className="" src={post.mainImage?.asset.url}></img>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
