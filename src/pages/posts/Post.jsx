import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { PortableText } from "@portabletext/react";
import { fetchPage } from "../../features/fetchDateSlice";
const Post = () => {
  const { blogId } = useParams();
  const { post } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(blogId);
    dispatch(fetchPage(blogId));
  }, [dispatch, blogId]);

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        {post.body?.map((block) => (
          <div key={block.keyBlock}>
            {block.style === "h2" && (
              <h2 className="font-3xl font-bold">{block.children.text}</h2>
            )}
            <img className="w-full" src={block.asset?.url}></img>
            {block.children?.map((text) => (
              <p key={text.key}>{text.text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
