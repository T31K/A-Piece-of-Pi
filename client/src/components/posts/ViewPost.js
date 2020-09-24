import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./post.scss";

const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <div className="window mr-3 ml-3 pb-3">
         <div class="icons"><span></span></div>
            <Container>
      
       
            <div className="title">
               <h4 className="title-text">{post.title}</h4>
               <p className="date-text">{post.author} | {postDate}</p>
     
            </div>
      
         
         <div className="body-text">
            {post.body}
         </div>
         <Row className="d-flex flex-column font-italic footerStyle">
            
         </Row>
         {auth && (
            <Row className="mt-4">
               <Col className="text-center">


               <FontAwesomeIcon 
                     icon={faEdit} 
                     className='edit-btn mb-2' 
                     variant="outline-info"
                     onClick={onEdit}
                     />

                     <FontAwesomeIcon 
                     icon={faTrash} 
                     className='edit-btn ml-2 mb-2' 
                     variant="outline-info"
                     onClick={onDelete}

                     />

            
               </Col>
            </Row>
         )}
      </Container>
      </div>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;