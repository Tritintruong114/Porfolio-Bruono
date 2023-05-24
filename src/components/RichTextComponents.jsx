import js from "refractor/lang/javascript";
import Refractor from "react-refractor";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

Refractor.registerLanguage(js);

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          className="w-3/4 xl:w-3/4  object-cover rounded-3xl"
          src={value.imageUrl?.url}
        />
      );
    },
    code: ({ value }) => (
      <div className="w-3/4 h-full py-3">
        <SyntaxHighlighter
          showLineNumbers
          language="javascript"
          style={atomOneDark}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl w-3/4 py-6 xl:text-6xl text-center text-black font-bold">
        {children}
      </h1>
    ),

    normal: ({ children }) => (
      <p className="w-3/4 xl:w-3/4 text-xl py-3 text-black">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl w-3/4 py-1 italic font-bold text-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl py-1 w-3/4 font-bold text-persian-600">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold w-3/4">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="py-1 w-1/2" style={{ listStyleType: "disclosure-closed" }}>
        <li>{children}</li>
      </ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
  marks: {
    highlight: ({ children }) => (
      <span className="text-black decoration-4 underline decoration-blue-400">
        {children}
      </span>
    ),
    code: ({ children }) => (
      <span className="text-white px-1 rounded font-code bg-black opacity-30 w-fit h-fit">
        {children}
      </span>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          className="text-black"
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
};
