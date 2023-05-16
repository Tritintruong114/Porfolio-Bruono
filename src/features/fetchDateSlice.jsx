import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sanityStore } from "../lib/client";

const initialState = {
  blogPosts: [],
  post: [],
};

export const fetchPage = createAsyncThunk("getData/post", async (slug) => {
  try {
    const response = await sanityStore.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        "slug" : slug.current,
        body[]{
          ...,
           code,
          "imageUrl":asset -> {
          url
        },
        }
      }`,
      {
        slug,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});

//
export const fetchPostsData = createAsyncThunk("getData/posts", async () => {
  try {
    const response = await sanityStore.fetch(`*[_type == "post"]{
      title,
      slug,
      tags,
      author->{name, 
        "image":image.asset->url,
      
      },
      publishedAt,
      mainImage {
        asset -> {
          url
        },
        alt,
      },
      categories,
      body[]{
        style,
        caption,
        children[]{
          text,
          _type
        },
        body,
        _key,
        asset -> {
          url
        }
      }
    }`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const fetchDataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsData.pending, (state) => {
        return state;
      })
      .addCase(fetchPostsData.fulfilled, (state, action) => {
        state.blogPosts = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchPostsData.rejected, (state) => {
        return state;
      })
      .addCase(fetchPage.pending, (state) => {
        return state;
      })
      .addCase(fetchPage.fulfilled, (state, action) => {
        console.log(action.payload);
        state.post = action.payload;
      })
      .addCase(fetchPage.rejected, (state) => {
        return state;
      });
  },
});

export default fetchDataSlice.reducer;
