import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsData } from "../../features/fetchDateSlice";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton";

const Posts = () => {
  const { blogPosts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  return (
    <div className="p-9 relative no-scrollbar bg-teal h-full overflow-scroll text-white w-full">
      <BackButton />
      <div className="w-full xl:px-48 md:px-24 px-12 flex flex-col gap-6 mt-24 md:grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-2 bg-background shadow-2xl rounded-3xl sm:visible invisible absolute sm:relative">
          {blogPosts[0].mainImage?.asset?.url && (
            <div
              className="text-center rounded-3xl flex flex-col items-center justify-center bg-white text-black"
              key={blogPosts[0].title}
            >
              <div className="h-full w-full p-6">
                <Link to={`${blogPosts[0].slug?.current}`}>
                  <img
                    className="object-cover rounded-3xl w-full h-full"
                    src={blogPosts[0].mainImage?.asset.url}
                  ></img>
                </Link>
              </div>
              <Link to={`${blogPosts[0].slug?.current}`}>
                <h1
                  className="font-bold text-xl w-full xl:text-2xl md:text-xl"
                  key={blogPosts[0].slug?.current}
                >
                  {blogPosts[0].title}
                </h1>
              </Link>
              <div className="flex w-full justify-center pb-6 gap-3 ">
                {/* <img className="rounded-full " src={post.author?.image} /> */}
                <div className="flex flex-col items-center">
                  <p className="font-handWrite text-xl font-bold text-center">
                    {blogPosts[0].author?.name}
                  </p>
                  <p className="text-xs font-light opacity-60">
                    {blogPosts[0].publishedAt}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {blogPosts.map((post) => {
          return (
            <>
              <div
                className="text-center bg-background  shadow-2xl rounded-3xl flex flex-col items-center justify-center bg-white text-black"
                key={post?.title}
              >
                <div className="h-full w-full p-6">
                  <Link to={`${post?.slug?.current}`}>
                    <img
                      className="object-cover rounded-3xl w-full h-full"
                      src={post?.mainImage?.asset.url}
                    ></img>
                  </Link>
                </div>
                <Link to={`${post.slug?.current}`}>
                  <h1
                    className="font-bold text-xl w-full xl:text-2xl md:text-xl"
                    key={post?.slug?.current}
                  >
                    {post?.title}
                  </h1>
                </Link>
                <div className="flex w-full justify-center pb-6 gap-3 ">
                  {/* <img className="rounded-full " src={post.author?.image} /> */}
                  <div className="flex flex-col items-center">
                    <p className="font-handWrite text-xl font-bold text-center">
                      {post?.author?.name}
                    </p>
                    <p className="text-xs font-light opacity-60">
                      {post?.publishedAt}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
