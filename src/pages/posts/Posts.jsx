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
    <div className="p-9 bg-black h-full text-white w-full ">
      <div className="absolute left-6 z-30 top-6">
        <Link to="/">
          <button className="p-3 active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-black hover:bg-white bg-opacity-20 ">
            Back
          </button>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-6 mt-24 md:grid grid-cols-1 md:grid-cols-2">
        {blogPosts.map((post) => {
          return (
            <div
              className="text-center rounded-3xl flex flex-col items-center justify-center bg-white text-black"
              key={post.title}
            >
              <div className="h-full w-full p-6">
                <Link to={`${post.slug?.current}`}>
                  <img
                    className="object-cover rounded-3xl w-full h-full"
                    src={post.mainImage?.asset.url}
                  ></img>
                </Link>
              </div>
              <Link to={`${post.slug?.current}`}>
                <h1
                  className="font-bold text-xl w-full xl:text-2xl md:text-xl"
                  key={post.slug?.current}
                >
                  {post.title}
                </h1>
              </Link>
              <div className="flex w-full justify-center pb-6 gap-3 ">
                {/* <img className="rounded-full " src={post.author?.image} /> */}
                <div className="flex flex-col items-center">
                  <p className="font-handWrite text-xl font-bold text-center">
                    {post.author?.name}
                  </p>
                  <p className="text-xs font-light opacity-60">
                    {post.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
