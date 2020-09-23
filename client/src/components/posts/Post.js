import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
     <div>
       
            
               <div className="title">
                  <h5>  >_ {post.title} </h5>
                  <p>{postDate} | {post.author}</p>
                  <p>{post.body.slice(0,300)+ ' read more...'}</p>
               </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
           
            <div>
          
  
            
         </div>
      </div>
     
  
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;