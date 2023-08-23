import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { fetchPage } from "../../features/fetchDateSlice";
import { RichTextComponents } from "../../components/RichTextComponents";
import { fetchPostsData } from "../../features/fetchDateSlice";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { BackButton } from "../../components/BackButton";

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
    <>

      <div className=" w-5/6 bg-background h-full overflow-scroll no-scrollbar my-3 relative bg-white shadow-2xl rounded-3xl pt-12 flex flex-col  items-center">
        <PortableText value={post?.body} components={RichTextComponents} />
      </div>
    </>
  );
};

export default Post;
