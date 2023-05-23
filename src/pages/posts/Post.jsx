import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { fetchPage } from "../../features/fetchDateSlice";
import { RichTextComponents } from "../../components/RichTextComponents";
import { fetchPostsData } from "../../features/fetchDateSlice";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const Post = () => {
  const { blogId } = useParams();
  const { post } = useSelector((store) => store?.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPage(blogId));
  }, [dispatch, blogId]);

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className=" w-5/6 my-12 relative bg-white rounded-3xl pt-12 text-centercontent-center flex flex-col justify-center items-center">
      <div className="absolute left-6 z-30 top-6">
        <Link to="/blogs">
          <button className="p-3 active:bg-persian-600 active:text-white  font-bold text-xl capitalize  rounded-xl  hover:text-white hover:bg-black bg-opacity-20 ">
            Back
          </button>
        </Link>
      </div>
      <PortableText value={post?.body} components={RichTextComponents} />
      <div className="mb-20 bg-white rounded-3xl h-40 w-3/4 flex items-center justify-center">
        <h1 className="text-6xl font-medium font-handWrite">
          {post.author?.name}
        </h1>
        {/* <img className="h-1/2 rounded-full" src={post.author?.image}></img> */}
      </div>
    </div>
  );
};

export default Post;
