// import Image from "";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          className="w-full my-3 object-cover rounded-3xl"
          src={value.imageUrl?.url}
        />
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-6xl text-center text-black font-bold">{children}</h1>
    ),
    normal: ({ children }) => <p className="text-black">{children}</p>,
    h2: ({ children }) => <h2 className="text-3xl text-black">{children}</h2>,
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
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
};
