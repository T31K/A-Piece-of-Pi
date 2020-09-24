import React from "react";
import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
     <div>
     <Container>
         <div className="mb-3">
         <div className='fakeMenu'>
            <div className="fakeButtons fakeClose"></div>
            <div className="fakeButtons fakeMinimize"></div>
            <div className="fakeButtons fakeZoom"></div>
            
         </div>
         
         <div className='fakeScreen'>
            <p className='line1  '> >_ {post.title} <span className="cursor1">_</span> </p>
            <p className="line2 "> {postDate} | {post.author}<span className="cursor2">_</span></p>
        
         </div>
      </div>
         </Container>
      </div>
     
  
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;