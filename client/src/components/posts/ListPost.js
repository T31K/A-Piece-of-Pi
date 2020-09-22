import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Post from "./Post";
import PropTypes from "prop-types";

import "./post.scss";

const ListPost = ({ posts }) => {
   return (
      <div>
         <Container>
            {posts.map(post => (
               <div className="mb-3 rounded">
               <Link to={`/blog/post/${post._id}`} key={post._id}>
                  <Post post={post} />
               </Link>
               </div>
            ))}
         </Container>
      </div>
   );
};

ListPost.propTypes = {
   posts: PropTypes.array.isRequired
};

export default ListPost;