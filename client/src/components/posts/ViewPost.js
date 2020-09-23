import React from "react";
import PropTypes from "prop-types";
import getFormattedDate from "../../utils/getFormattedDate";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";

const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <div className="window mr-3 ml-3">
         <div class="icons"><span></span></div>
            <Container>
      
       
            <div className="title">
               <h4>{post.title}</h4>
               <p>{post.author} | {postDate}</p>
     
            </div>
      
       
         
         <div className="body-text">
            {post.body}
         </div>
         <Row className="d-flex flex-column font-italic footerStyle">
            
         </Row>
         {auth && (
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     onClick={onEdit}
                  >
                     Edit
                  </Button>
                  <Button variant="outline-danger" onClick={onDelete}>
                     Delete
                  </Button>
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