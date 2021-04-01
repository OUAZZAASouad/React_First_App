import { Card, Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../logo.svg'
import { ArrowRight } from 'react-bootstrap-icons';
import { faUser , faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Forms() {
  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findFormErrors = () => {
    const { firstname, lastname, password, password_, email } = form
    const newErrors = {}
    // first name errors
    if ( !firstname || firstname === '' ) newErrors.firstname = 'First name is required!'
    else if ( firstname.length > 30 ) newErrors.firstname = 'First name is too long!'
    // last name errors
    if ( !lastname || lastname === '' ) newErrors.lastname = 'Last name is required!'
    else if ( lastname.length > 30 ) newErrors.lastname = 'Last name is too long!'
    // email errors 
    if ( !email || email === '' ) newErrors.email = 'Email is required!'
    // password errors
    if ( !password || password === '' ) newErrors.password = 'Password is required!'
    if ( !password_ || password_ === '' ) newErrors.password_ = 'Comfirm password is required!'
    else if (password !== password_ ) newErrors.password_ = 'Please make sure your passwords match !'
    return newErrors
}

  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('OK!')
    }
  }
  return (
              <Card className = "shadow">
                <Card.Header className = 'bg-dark'>
                  <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
                    <Card.Img variant="top" src={logo} />
                    <p style = {{ color : "rgb(97, 218, 251)", fontSize : 20}} className = "text-center" >ReactJs</p>
                  </Col>
                </Card.Header>

                <Card.Body>
                  <Form onSubmit={handleSubmit}> 
                  
                      <Form.Group as={Row} controlId="formGridFirstName" className = 'd-flex align-items-center justify-items-center'>
                          <FontAwesomeIcon   icon={faUser} className = 'fa-lg ml-3'/>
                            <Col >
                              <Form.Control type="text" placeholder="First Name" onChange={ e => setField('firstname', e.target.value) } isInvalid = { !!errors.firstname }/>
                              <Form.Control.Feedback type='invalid'>{ errors.firstname }</Form.Control.Feedback>
                            </Col>             
                      </Form.Group>
                      
                      <Form.Group as={Row} controlId="formGridLastName" className = 'd-flex align-items-center justify-items-center'>
                        <FontAwesomeIcon  icon={faUser} className = 'fa-lg ml-3'/>
                          <Col>
                            <Form.Control type="text" placeholder="Last Name" onChange={ e => setField('lastname', e.target.value) } isInvalid = { !!errors.lastname }/>
                            <Form.Control.Feedback type='invalid'>{ errors.lastname }</Form.Control.Feedback>
                          </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formGridEmail" className = 'd-flex align-items-center justify-items-center'>
                        <FontAwesomeIcon  icon={faEnvelope} className = 'fa-lg ml-3'/>
                          <Col>
                            <Form.Control type="email" placeholder="Email"   onChange={ e => setField('email', e.target.value) } isInvalid = { !!errors.email } />
                            <Form.Control.Feedback type='invalid'>{ errors.email }</Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formGridPassword" className = 'd-flex align-items-center justify-items-center'>
                        <FontAwesomeIcon  icon={faLock} className = 'fa-lg ml-3'/>
                          <Col>
                            <Form.Control type="password" placeholder="Password" onChange={ e => setField('password', e.target.value) } isInvalid = { !!errors.password } />
                            <Form.Control.Feedback type='invalid'>{ errors.password }</Form.Control.Feedback>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formGridComfirmPassword" className = 'd-flex align-items-center justify-items-center'>
                        <FontAwesomeIcon  icon={faLock} className = 'fa-lg ml-3'/>
                        <Col>
                          <Form.Control type="password" placeholder="Comfirm Password"  onChange={ e => setField('password_', e.target.value) } isInvalid = { !!errors.password_ }/>
                          <Form.Control.Feedback type='invalid'>{ errors.password_ }</Form.Control.Feedback>
                        </Col>
                      </Form.Group>
                      <Button variant="info" type="submit" block> Sign Up </Button>
                  </Form>
                </Card.Body>
              </Card> 
  );
}

export default Forms;