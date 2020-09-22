import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
     <div>
         
            <div className="window mr-3 ml-3">
            <div class="icons"><span></span></div>
               <div className="title"> >_ {post.title}</div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
           
            <div>
           {//}   <div className="title">{postDate}</div> 
   }
            
         </div>
      </div>
      </div>
  
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;