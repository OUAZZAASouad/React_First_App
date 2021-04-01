import { Card, Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import NavbarComp from '../template/NavbarComp';
import Forms from '../Forms';

function MainLayout() {
    return (
        <Container className ='d-flex align-items-center justify-items-center' style = {{height : '100vh'}}>
                        <NavbarComp ></NavbarComp>
                        <Col md={{ span: 6, offset: 3 }} >
                            <Forms></Forms>
                        </Col>
                        
                    
                
        </Container>
    );
  }
  
  export default MainLayout;