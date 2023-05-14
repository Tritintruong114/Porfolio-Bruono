import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Post = () => {
  const blogId = useParams();
  const { blogPosts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  return (
    <div>
      {blogPosts.map((post) => {
        return (
          <div key={post.title}>
            <p>
              {post.body.map((children) => {
                return (
                  <div key={children.key}>
                    <p>{children.children?.map((text) => text.text)}</p>
                  </div>
                );
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
