import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { fetchPage } from "../../features/fetchDateSlice";
import { RichTextComponents } from "../../components/RichTextComponents";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
const Post = () => {
  // console.log(RichTextComponents);
  // const { y } = useScroll();
  const { blogId } = useParams();
  const { post } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPage(blogId));
    console.log(post);
  }, [dispatch, blogId]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="mx-24 pt-12 text-centercontent-center flex flex-col justify-center items-center">
      <PortableText value={post?.body} components={RichTextComponents} />
    </div>
  );
};

export default Post;
