import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/posts/Posts.jsx";
import Post from "./pages/posts/Post.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:blogId",
        element: <Post />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
