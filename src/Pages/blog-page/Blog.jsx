import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import './blog.css';

const Blog = () => {
  const [postLists, setPostList] = useState([]);

  const postCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    console.log("posts fetched");
  }, []);

  return (
    <main id="blog__page--container">
      <div className="row">
        <div id="blog__posts--wrapper">
            <h1 id="blogs__heading">Featured Blog Posts</h1>
          {postLists.map((post) => {
            return (
              <div key={post} className="post">
                <h1 className="title">
                  {post.title}
                </h1>
                <h5 className="postCategory">
                  {post.postCategory}
                </h5>
                <p className="postTags">
                  {post.tags}
                </p>
                <p className="postBlurb">
                  {post.blogBlurb}
                </p>
                <p className="postText">
                  {post.blogPost}
                </p>
                <p className="postDate">
                  {post.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Blog;
