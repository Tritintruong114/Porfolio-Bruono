// import Image from "";

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

    code: ({ code }) => (
      <pre className="text-black">
        <code className="language-javascript hljs">
          <p>{code}</p>
        </code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl w-3/4 py-6 xl:text-6xl text-center text-black font-bold">
        {children}
      </h1>
    ),

    normal: ({ children }) => (
      <p className="w-3/4 xl:w-3/4 text-xl py-6 text-black">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl py-3 italic font-bold text-black">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl py-1  font-bold text-persian-600">{children}</h3>
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
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          className="text-blue-600"
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },

    myCodeField: {
      code: ({ code }) => (
        <pre className="text-black">
          <code className="language-javascript">
            <p>{code}</p>
          </code>
        </pre>
      ),
    },
  },
};
