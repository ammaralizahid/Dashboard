import React , {useState} from 'react'
import { Link } from "react-router-dom";
import { Row,Col,Form } from 'react-bootstrap'
import Button from '../../Components/Button/button'
import Input from '../../Components/Input/input'
import ImageUpload from '../../Components/ImageUpload/imageUpload'
import style from './signUp.module.css'
export default function SignUp() {
    const [validated, setValidated] = useState(false);
  
    const handleSignUp = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
      setTimeout(() => setValidated(false), 1000);
    };
  return (
<>
<div className={`pt-2 ${validated ? 'shake' : ""}`}>
   
<Row className='py-5'>
<Col xs="2" sm="2" md="2" lg="2" xl="2">
    </Col>
    <Col xs="8" sm="8" md="8" lg="8" xl="8" className='d-flex justify-content-center'>
    <span className={style.prominentTxt + ' ' + style.alarm}>
        Let's Make Something Crazy
    </span>
    </Col>
    <Col xs="2" sm="2" md="2" lg="2" xl="2">
    </Col>
</Row>

<Row >
<Col xs="4" sm="4" md="4" lg="4" xl="4">
    </Col>
    <Col xs="4" sm="4" md="4" lg="4" xl="4" className='d-flex justify-content-center'>
   
    <ImageUpload/>
    </Col>
    <Col xs="4" sm="4" md="4" lg="4" xl="4">
    </Col>
</Row>
<Form noValidate validated={validated} onSubmit={handleSignUp}>

<Row className='d-flex justify-content-center pt-2'>
    <Col xs="10" sm="5" md="5" lg="3">
<Input label={'Full Name'} placeholder={'e.g, Ammar Ali Zahid'} required></Input>
    
    </Col>
    <Col xs="10" sm="5" md="5" lg="3">
<Input label={'Email'} placeholder={'example@gmail.com'} required></Input>
    
    </Col>
</Row>
<Row className='d-flex justify-content-center'>
    <Col xs="10" sm="5" md="5" lg="3">
<Input label={'Contact Number'} placeholder={'e.g, 03001234567'} required></Input>
    
    </Col>
    <Col xs="10" sm="5" md="5" lg="3">
<Input label={'Street Address'} placeholder={'e.g, Main Bulivard Cantt, Lahore'} required></Input>
    
    </Col>
</Row>

<Row className={`d-flex justify-content-center `}>
<Col xs="10" sm="5" md="5" lg="3">
<Button label={'Sign Up'} onClick={handleSignUp}></Button>

</Col>
<Col xs="10" sm="5" md="5" lg="3">
<Button label={'Sign Up With Google'} google variant onClick={handleSignUp}></Button>

</Col>
</Row>
    </Form>
<Row>
    <Col lg="12">
<div className='d-flex justify-content-evenly pb-3'>
    <span>Already have an account?</span>
 <Link to={'/sign-in'}>
    <span className={style.forgetPass}>Sign In</span>
 </Link>
</div>
    </Col>
</Row>
</div>

</>
  )
}
