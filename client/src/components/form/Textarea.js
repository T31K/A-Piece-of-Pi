import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import CKEditor from 'ckeditor4-react';


const Textarea = ({ name, placeholder, value, onChange, onBlur, text }) => {
   return (
 <div>
   
      <Form.Group controlId={text.module + name}>
         <Form.Label>{text.label}</Form.Label>
         <Form.Control
            name={name}
            as="textarea"
            rows="10"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={text.error ? true : false}
         />
         <Form.Control.Feedback type="invalid">
            {text.error}
         </Form.Control.Feedback>
      </Form.Group>
      </div>
   );
};

Textarea.propTypes = {
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   text: PropTypes.object.isRequired
};

export default Textarea;