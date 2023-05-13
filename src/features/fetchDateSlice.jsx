import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sanityStore } from "../lib/client";

const initialState = {
  blogPosts: [],
};

export const fetchPostsData = createAsyncThunk("getData/posts", async () => {
  try {
    const response = await sanityStore.fetch(`*[_type == "post"]{
      title,
      slug,
      tags,
      author,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
      categories,
      body[]{
        ...,
        asset->{
        
          url
         
        }
      }
    }`);
    // console.log(response);
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
      });
  },
});

export default fetchDataSlice.reducer;
