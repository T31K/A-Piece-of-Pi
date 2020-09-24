import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import "./post.scss"

const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
   const { title, body, errors } = post;
   return (
      <Container>
         <div className='fakeMenu'>
            <div className="fakeButtons fakeClose"></div>
            <div className="fakeButtons fakeMinimize"></div>
            <div className="fakeButtons fakeZoom"></div>
         </div>

         <div className='fakeFormScreen'>
         <Container>
               <Form noValidate onSubmit={onSubmit} className="text-white text-custom ">
                  <Input
                     name="title"
                     type="text"
                     placeholder="Enter Post Title"
                     className="text-custom"
                     value={title}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Title",
                        error: errors.title
                     }}
                  />
                  <Textarea
                     name="body"
                     placeholder="Write your post here..."
                     value={body}
                     className="textarea"
                     onChange={onChange}
                        onBlur={onBlur}
                        text={{
                           module: "post",
                        label: "Description",
                        error: errors.body
                     }}
                     
                  />
                  <Button type="submit" className='edit-btn' >
                           <FontAwesomeIcon
                              icon={faSignInAlt} 
                              disabled={loading}
                            />
                        </Button>

                
                 
               </Form>
      </Container>
          
         </div>
         
      </Container>
   );
};

PostForm.propTypes = {
   post: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default PostForm;