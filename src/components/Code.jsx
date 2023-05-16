import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";

hljs.registerLanguage("javascript", javascript);

export function Code(post) {
  useEffect(() => {
    hljs.highlightAll();
  }, [post]);

  return (
    <pre className="text-black">
      <code className="language-javascript">
        <div key={post.title}>{post.title}</div>
        <p>{post.body?.map((code) => code.code)}</p>
      </code>
    </pre>
  );
}
