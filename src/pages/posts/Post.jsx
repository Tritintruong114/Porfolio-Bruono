import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { fetchPage } from "../../features/fetchDateSlice";
import { RichTextComponents } from "../../components/RichTextComponents";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const Post = () => {
  // console.log(RichTextComponents);
  // const { y } = useScroll();
  const { blogId } = useParams();
  const { post } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPage(blogId));
    // console.log(post);
  }, [dispatch, blogId]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="mx-20 pt-12 text-centercontent-center flex flex-col justify-center items-center">
      <PortableText value={post?.body} components={RichTextComponents} />
    </div>
  );
};

export default Post;
