import React , {useState} from 'react'
import { Link } from "react-router-dom";
import { Row,Col,Form } from 'react-bootstrap'
import Button from '../../Components/Button/button'
import Input from '../../Components/Input/input'
import CheckBox from '../../Components/CheckBox/checkbox'
import style from './login.module.css'
export default function Login() {

    const [validated, setValidated] = useState(false);
  
    const handleSignIn = (event) => {
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
<div className='pt-5'>
<Row className='pt-5 pb-3'>
<Col xs="2" sm="2" md="2" lg="4" xl="4">
    </Col>
    <Col xs="8" sm="8" md="8" lg="4" xl="4" className='d-flex justify-content-center'>
    <span className={style.prominentTxt + ' ' + style.wave}>
        Welcome Back 👋
    </span>
    </Col>
    <Col xs="2" sm="2" md="2" lg="4" xl="4">
    </Col>
</Row>
<Row>
<Col xs="2" sm="2" md="2" lg="4" xl="4">
    </Col>
    <Col xs="8" sm="8" md="8" lg="4" xl="4" className='d-flex justify-content-center'>
    <span className={style.txt}>
        {/* use api to change text below */}
    Looks like you are in a mood today!</span> 
    </Col>
    <Col xs="2" sm="2" md="2" lg="4" xl="4">
    </Col>
</Row>
<Form noValidate validated={validated} onSubmit={handleSignIn}>

<Row className={`py-5 ${validated ? 'shake' : ""}`}>
<Col xs="2" sm="2" md="2" lg="4" xl="4">
    </Col>
<Col xs="8" sm="8" md="8" lg="4" xl="4">
<Input label={'Email'} placeholder={'example@gmail.com'} required></Input>
<Input label={'Password'} placeholder={'********'} required></Input>
<div className='d-flex justify-content-between pb-3'>
    <CheckBox label={'Remember Me'}></CheckBox>
 
    <span className={style.forgetPass}>
        Forget Password
    </span>
</div>
<Link to={'/dashboard'}>

        <Button label={'Sign In'} onClick={handleSignIn}></Button>
        <Button label={'Sign In With Google'} google variant onClick={handleSignIn}></Button>
      </Link>
<div className='d-flex justify-content-between pb-3'>
    <span>Don't have an account?</span>
 <Link to={'/sign-up'}>
    <span className={style.forgetPass}>Sign Up for free</span>
 </Link>
</div>
</Col>

<Col xs="2" sm="2" md="2" lg="4" xl="4">
    </Col>
</Row>
</Form>

</div>

</>
  )
}
